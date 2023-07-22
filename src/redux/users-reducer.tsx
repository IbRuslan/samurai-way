export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
    photoUrl: string
}

export type UsersPageType = {
    users: Array<UsersType>
}

const initialState : UsersPageType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://klike.net/uploads/posts/2019-03/1551596732_15.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://klike.net/uploads/posts/2019-03/1551596770_39.jpg',
            followed: false,
            fullName: 'Evgeniy',
            status: 'I am a teacher',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 3,
            photoUrl: 'https://gagaru.club/uploads/posts/2023-02/1675951448_gagaru-club-p-krasivie-cherti-litsa-u-muzhchin-pinterest-33.jpg',
            followed: true,
            fullName: 'Sergey',
            status: 'I am a student',
            location: {city: 'Moscow', country: 'Russian'}
        }
    ]
}

export type ActionUsersType = followAT | unFollowAT | setUsersAT

export const userReducer = (state: UsersPageType = initialState, action: ActionUsersType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            debugger
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
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