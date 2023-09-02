import {Dispatch} from "redux";
import {AuthMe} from "../api/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthPageType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export type ActionAuthType = setUserDataAT

export const authReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
        default:
            return state
    }
}

export type setUserDataAT = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (data: AuthPageType) => ({type: 'SET-USER-DATA', data} as const)

export const setAuthUserDataTC = () => (dispatch: Dispatch) => {
    return AuthMe.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data
                const userId = id
                const isAuth = true
                dispatch(setAuthUserDataAC({userId, email, login, isAuth}))
            }
        })
}

export const setLoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    AuthMe.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataTC())
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
                    isAuth: false
                }
                dispatch(setAuthUserDataAC(data))
            }
        })
}
