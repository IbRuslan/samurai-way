import { Dispatch } from 'redux';
import {follow, getUsers, unFollow} from "../api/api";

export interface UsersType {
    name: string;
    id: number;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export interface UsersPageType {
    items: UsersType[];
    totalCount: number;
    pageSize: number;
    currentPage: number
    isFetching: boolean
    error: string | null;
    followingInProgress: number[]
}

const initialState : UsersPageType = {
    items: [],
    totalCount: 0,
    pageSize: 7,
    currentPage: 1,
    isFetching: true,
    error: null,
    followingInProgress: []
}

export type ActionUsersType = followAT | unFollowAT | setUsersAT | setCurrentPageAT | setTotalCountsAT | toggleIsFetchingAT | followingInProgressAT

export const userReducer = (state: UsersPageType = initialState, action: ActionUsersType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            debugger
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, items: [...action.users]}
        case "SET-TOTAL-COUNTS":
            return {...state, totalCount: action.counts}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.fetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.progress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type followAT = ReturnType<typeof followAC>
export type unFollowAT = ReturnType<typeof unFollowAC>
export type setUsersAT = ReturnType<typeof setUsersAC>
export type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type setTotalCountsAT = ReturnType<typeof setTotalCountsAC>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
export type followingInProgressAT = ReturnType<typeof followingInProgressAC>

export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unFollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const)
export const setTotalCountsAC = (counts: number) => ({type: 'SET-TOTAL-COUNTS', counts} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const toggleIsFetchingAC = (fetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', fetching} as const)
export const followingInProgressAC = (progress: boolean, userId: number) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', progress, userId} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<any>) => {
    dispatch(toggleIsFetchingAC(true))
    getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setCurrentPageAC(currentPage))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountsAC(data.totalCount))
            dispatch(toggleIsFetchingAC(false))
        })
}
export const followTC = (id: number) => (dispatch: Dispatch<any>) => {
    dispatch(followingInProgressAC(true, id))
    follow(id)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(followingInProgressAC(false, id))
        })
}
export const unFollowTC = (id: number) => (dispatch: Dispatch<any>) => {
    dispatch(followingInProgressAC(true, id))
    unFollow(id)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(unFollowAC(id))
            }
            dispatch(followingInProgressAC(false, id))
        })
}