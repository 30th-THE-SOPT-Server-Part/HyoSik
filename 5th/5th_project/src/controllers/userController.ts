import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode"
import message from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import { validationResult } from "express-validator";
import getToken from "../modules/jwtHandlers";
import { UserSignInDto } from "../interfaces/user/UserSignInDto";


/**
 * @route POST /user
 * @desc Create User
 * @access Public
 */
const createUser = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    const userCreateDto: UserCreateDto = req.body; // User Create Dto로 req.body 받아 옴

    try {
        const result = await UserService.createUser(userCreateDto);
        if (!result) return res.status(statusCode.CONFLICT).send(util.fail(statusCode.CONFLICT, message.DUPLICATED));

        const accessToken = getToken(result._id);

        const data = {
            _id: result._id,
            accessToken
        };

        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATED_USER_SUCCESS, data));

    } catch (error) {
        console.log(error);
        // 서버 내부 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};

/**
 * @route PUT /user/:userId
 * @desc Update User
 * @access Public
 */
const updateUser = async (req: Request, res: Response): Promise<void> => {
    const userUpdateDto: UserUpdateDto = req.body;
    const { userId } = req.params;

    try {
        await UserService.updateUser(userId, userUpdateDto);

        res.status(statusCode.NO_CONTENT).send();

    } catch (error) {
        console.log(error);
        // 서버 내부 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};

/**
 * @route GET /user/:userId
 * @desc Get User
 * @access Public
 */
const findUserById = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    try {
        const data: UserResponseDto | null = await UserService.findUserById(userId);

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};

/**
 * @route DELETE /user/:userId
 * @desc Delete User
 * @access Public
 */
 const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    try {
        await UserService.deleteUser(userId);

        res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
};

/**
 * @route PUT /user/sigin
 * @desc Signin User
 * @access Public
 */
const signInUser = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    const userSignInDto: UserSignInDto = req.body;

    try {
        const result = await UserService.signInUser(userSignInDto);

        if (!result) return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        else if (result == 401) return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_PASSWORD));

        const accessToken = getToken((result as PostBaseResponseDto)._id);

        const data = {
            _id: (result as PostBaseResponseDto)._id,
            accessToken
        }

        res.status(statusCode.OK).send(util.success(statusCode.OK, message.SIGNIN_USER_SUCCESS, data));
    } catch (error) {
        console.log(error);
        // 서버 내부 오류
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser,
    signInUser
}