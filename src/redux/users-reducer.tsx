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
    error: string | null;
}

const initialState : UsersPageType = {
    "items": [
        {
            "name": "Shubert",
            "id": 1,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
    ],
    "totalCount": 30,
    "error": null
}

export type ActionUsersType = followAT | unFollowAT | setUsersAT

export const userReducer = (state: UsersPageType = initialState, action: ActionUsersType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            debugger
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, items: [...state.items, ...action.users]}
        default:
            return state
    }
}

export type followAT = ReturnType<typeof followAC>
export type unFollowAT = ReturnType<typeof unFollowAC>
export type setUsersAT = ReturnType<typeof setUsersAC>
export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unFollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: 'SET-USERS', users} as const)