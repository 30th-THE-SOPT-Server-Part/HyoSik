import { SchoolInfo } from "../school/schoolInfo";

export interface UserCreateDto {
    name: string,
    phone: string;
    email: string;
    age?: number;
    school?: SchoolInfo
}