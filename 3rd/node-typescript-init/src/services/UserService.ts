import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import User from "../models/user";

const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto> => {
    try {
        const user = new User({
            name: userCreateDto.name,
            phone: userCreateDto.phone,
            email: userCreateDto.email,
            age: userCreateDto.age,
            school: userCreateDto.school
        });

        await user.save();

        const data = {
            _id: user.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
    try {
        // findByIdAndUpdate
        await User.findByIdAndUpdate(userId, userUpdateDto);
        
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async (userId: string): Promise<UserResponseDto> => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {

    }
}

export default {
    createUser,
    updateUser
}