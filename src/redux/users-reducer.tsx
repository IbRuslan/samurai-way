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
    error: string | null;
}

const initialState : UsersPageType = {
    items: [],
    totalCount: 30,
    pageSize: 7,
    currentPage: 1,
    error: null
}

export type ActionUsersType = followAT | unFollowAT | setUsersAT | setCurrentPageAT

export const userReducer = (state: UsersPageType = initialState, action: ActionUsersType): UsersPageType => {
    console.log('set')
    switch (action.type) {
        case "FOLLOW":
            debugger
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, items: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}

export type followAT = ReturnType<typeof followAC>
export type unFollowAT = ReturnType<typeof unFollowAC>
export type setUsersAT = ReturnType<typeof setUsersAC>
export type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unFollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)