import express, { Request, Response } from "express";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode"
import message from "../modules/responseMessage";
import util from "../modules/util";
import { UserService } from "../services";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";


/**
 * @route POST /user
 * @desc Create User
 * @access Public
 */
const createUser = async (req: Request, res: Response) => {
    const userCreateDto: UserCreateDto = req.body; // User Create Dto로 req.body 받아 옴

    try {
        const data = await UserService.createUser(userCreateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.READ_USER_SUCCESS, data));

    } catch (error) {
        console.log(error);
        // 서버 내부 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

/**
 * @route PUT /user/:userId
 * @desc Update User
 * @access Public
 */
const updateUser = async (req: Request, res: Response) => {
    const userUpdateDto: UserUpdateDto = req.body;
    const { userId } = req.params;

    try {
        const data = await UserService.updateUser(userUpdateDto);
        res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.READ_USER_SUCCESS, data));

    } catch (error) {
        console.log(error);
        // 서버 내부 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
    }
}

export default {
    createUser,
    updateUser
}