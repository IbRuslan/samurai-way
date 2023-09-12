import {Dispatch} from "redux";
import {AuthMe} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captcha: string | null
}

const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

export type ActionAuthType = setUserDataAT | setCaptchaUrlAT

export const authReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
        case "SET-CAPTCHA":
            return {...state, captcha: action.captcha}
        default:
            return state
    }
}

export type setUserDataAT = ReturnType<typeof setAuthUserDataAC>
export type setCaptchaUrlAT = ReturnType<typeof setCaptchaUrlAC>
export const setAuthUserDataAC = (data: AuthPageType) => ({type: 'SET-USER-DATA', data} as const)
export const setCaptchaUrlAC = (captcha: string) => ({type: 'SET-CAPTCHA', captcha} as const)

export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    return AuthMe.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data
                const userId = id
                const isAuth = true
                const captcha = null
                dispatch(setAuthUserDataAC({userId, email, login, isAuth, captcha}))
            }
        })
}

export const setLoginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => (dispatch: AppThunkDispatch) => {
    AuthMe.login(email, password, rememberMe, captcha)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataTC())
            } else if(res.data.resultCode === 10) {
                dispatch(getCaptchaTC())
            } else {
                dispatch(stopSubmit("login", {_error: res.data.messages[0]}))
            }
        })
        .catch((e) => {
            console.log(e.message)
        })
}

export const setLogoutTC = () => (dispatch: Dispatch) => {
    AuthMe.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                const data = {
                    userId: null,
                    email: null,
                    login: null,
                    isAuth: false,
                    captcha: null
                }
                dispatch(setAuthUserDataAC(data))
            }
        })
}

export const getCaptchaTC = () => (dispatch: AppThunkDispatch) => {
    AuthMe.getCaptchaUrl()
        .then(res => {
                dispatch(setCaptchaUrlAC(res.data.url))
        })
        .catch((e) => {
            console.log(e.message)
        })
}