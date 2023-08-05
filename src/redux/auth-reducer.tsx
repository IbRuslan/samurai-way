export type AuthPageType = {
    userId: string | null,
    email: string | null,
    login: string | null
}

const initialState: AuthPageType = {
    userId: null,
    email: null,
    login: null
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

export type setUserDataAT = ReturnType<typeof setUserDataAC>
export const setUserDataAC = (userId: string, email: string, login: string) => ({type: 'SET-USER-DATA', data: {userId, email, login}} as const)
