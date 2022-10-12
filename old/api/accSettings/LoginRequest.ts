import { Nullable } from "../../shared/types/Nullable";


export interface LoginRequest<T> extends Express.Request {
    body: T
}



export interface LoginParams {
    username: string;
    password: string;
}

export interface RegisterParams {
    login: string;
    email: string;
    password: string;
    originPlace: Nullable<string>;
}



 


