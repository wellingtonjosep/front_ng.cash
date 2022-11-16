import { ReactNode } from "react";

export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginData {
    login(data: ILogin): Promise<boolean>
}

export interface IChildrenReact {
    children: ReactNode;
}