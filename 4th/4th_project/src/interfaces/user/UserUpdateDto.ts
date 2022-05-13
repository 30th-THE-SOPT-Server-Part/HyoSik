import { SchoolInfo } from "../school/schoolInfo";

export interface UserUpdateDto {
    name?: string,
    phone?: string;
    email?: string;
    age?: number;
    school?: SchoolInfo
}