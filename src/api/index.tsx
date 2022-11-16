import axios from "axios";

export const api = axios.create({
    baseURL: "https://ngcash.herokuapp.com/users",
});