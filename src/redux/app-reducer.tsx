import {AppThunkDispatch} from "./redux-store";
import {setAuthUserDataTC} from "./auth-reducer";

export type AppInitialType = {
    initialized: boolean
}

const initialState: AppInitialType = {
    initialized: false
}

export type ActionAppType = setInitializedAT

export const appReducer = (state: AppInitialType = initialState, action: ActionAppType): AppInitialType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: action.status}
        default:
            return state
    }
}

export type setInitializedAT = ReturnType<typeof setInitializedAC>
export const setInitializedAC = (status: boolean) => ({type: 'SET-INITIALIZED', status} as const)


export const initializeTC = () => (dispatch: AppThunkDispatch) => {
    const result = dispatch(setAuthUserDataTC())
    result.then(() => {
        dispatch(setInitializedAC(true))
    })
}