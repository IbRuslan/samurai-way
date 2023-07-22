type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

type UsersStateType = {
    users: Array<UsersType>
}

const initialState : UsersStateType = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Evgeniy', status: 'I am a teacher', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, followed: true, fullName: 'Sergey', status: 'I am a student', location: {city: 'Moscow', country: 'Russian'}}
    ]
}

type ActionUsersType = followAT | unFollowAT

export const userReducer = (state: UsersStateType = initialState, action: ActionUsersType): UsersStateType => {

    switch (action.type) {
        default:
            return state
    }
}

export type followAT = ReturnType<typeof followAC>
export type unFollowAT = ReturnType<typeof unFollowAC>
export const followAC = () => ({type: 'FOLLOW'} as const)
export const unFollowAC = () => ({type: 'UNFOLLOW'} as const)