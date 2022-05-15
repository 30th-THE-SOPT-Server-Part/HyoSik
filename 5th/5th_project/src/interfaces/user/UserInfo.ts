import { SchoolInfo } from "../school/schoolInfo";

export interface UserInfo {
    name: string;
    phone: string;
    email: string;
    password: string;
    age: number;
    school: SchoolInfo
}