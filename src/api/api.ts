import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "d39b462c-d4f0-4188-bc0f-9d102dcb4f07"}
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
           return response.data
        })
}

export const follow = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const unFollow = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}

export const authMe = () => {
    return instance.get("auth/me")
        .then(response => {
            return response.data
        })
}