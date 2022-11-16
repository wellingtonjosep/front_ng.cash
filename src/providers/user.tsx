import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { api } from "../api";
import { IChildrenReact, ILogin, ILoginData } from "../interfaces";

export const UserContext = createContext<ILoginData>(null!)

export const UserProviders = ({children}:IChildrenReact) => {

    const navigate = useNavigate()

    async function login(data: ILogin) {
        const loading = toast.loading("Carregando...");

        await api.post("/login", data).then((res) => {

            localStorage.setItem("token", res.data.token)
            localStorage.setItem("userId", res.data.userId)
        
            toast.update(loading, {
                render: "Sucesso !",
                autoClose: 1000,
                type: "success",
                isLoading: false,
            });
            
            navigate("/home")
        }).catch((err) => {

            toast.update(loading, {
                render: "Senha ou username invalido",
                autoClose: 1000,
                type: "error",
                isLoading: false,
            });
        })
        return true
    }

    return (
        <UserContext.Provider
        value={{
            login
        }}
        >
        {children}
        </UserContext.Provider>
    )
}