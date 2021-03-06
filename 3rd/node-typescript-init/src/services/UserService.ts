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
};

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto) => {
    try {
        const updatedUser = {
            name : userUpdateDto.name,
            phone : userUpdateDto.phone,
            email : userUpdateDto.email,
            age : userUpdateDto.age,
            school : userUpdateDto.school
        }
        await User.findByIdAndUpdate(userId, updatedUser);
        
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const findUserById = async (userId: string) => {
    try {
        const user: UserResponseDto | null = await User.findById(userId);
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const deleteUser = async (userId: string) => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export default {
    createUser,
    updateUser,
    findUserById,
    deleteUser
}