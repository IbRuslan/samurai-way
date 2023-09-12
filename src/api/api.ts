import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "afd6ff0f-b946-43ee-8cf6-ef27b7241d9b"}
})


export const AuthMe = {
    authMe() {
        return instance.get("auth/me")
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    },
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

export const UserApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}


export const ProfileApi = {
    profileShowUser(userId: string){
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
    },
    savePhoto(file: FileList) {
        const formData = new FormData()
        formData.append('photo', file[0])
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

