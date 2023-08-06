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
    isAuth: false
}

export type ActionAuthType = setUserDataAT

export const authReducer = (state: AuthPageType = initialState, action: ActionAuthType): AuthPageType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export type setUserDataAT = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number, email: string, login: string) => ({type: 'SET-USER-DATA', data: {userId, email, login}} as const)
