export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
}

export type ProfilePageType = {
    profile: ProfileType | null
    posts: PostsType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Im happy', likesCount: 4},
        {id: 3, message: 'Its my first post', likesCount: 16}
    ],
    newPostText: '',
    profile: null,
}

export type ActionProfileType = addPostAT | UpdateNewPostAT | setUserProfileAT

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type addPostAT = ReturnType<typeof addPostAC>
export type UpdateNewPostAT = ReturnType<typeof updateNewPostAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostAC = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)