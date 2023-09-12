import {Dispatch} from "redux";
import {ProfileApi} from "../api/api";

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
    photos: PhotoProfileType
}

type PhotoProfileType = {
    small: string;
    large: string;
}

export type ProfilePageType = {
    profile: ProfileType | null
    posts: PostsType[]
    status: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Im happy', likesCount: 4},
        {id: 3, message: 'Its my first post', likesCount: 16}
    ],
    profile: null,
    status: ''
}

export type ActionProfileType = addPostAT | setUserProfileAT | setUserStatusAT | updateUserStatusAT | updateUserPhotoAT

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        case "UPDATE-NEW-STATUS":
            return {...state, status: action.newStatus}
        case "SET-NEW-PHOTO":
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.data }}
            }
            return state
        default:
            return state
    }
}

export type addPostAT = ReturnType<typeof addPostAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export type setUserStatusAT = ReturnType<typeof setUserStatusAC>
export type updateUserStatusAT = ReturnType<typeof updateUserStatusAC>
export type updateUserPhotoAT = ReturnType<typeof updateUserPhotoAC>

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfileAC = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserStatusAC = (status: string) => ({type: 'SET-USER-STATUS', status} as const)
export const updateUserStatusAC = (newStatus: string) => ({type: 'UPDATE-NEW-STATUS', newStatus} as const)
export const updateUserPhotoAC = (data: PhotoProfileType) => ({type: 'SET-NEW-PHOTO', data} as const)

export const profileShowUserTC = (userId: string) => (dispatch: Dispatch<ActionProfileType>) => {
    ProfileApi.profileShowUser(userId)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}
export const profileGetUserStatusTC = (userId: string) => (dispatch: Dispatch<ActionProfileType>) => {
    ProfileApi.getStatus(userId)
        .then(res => {
            dispatch(setUserStatusAC(res.data))
        })
}
export const profileUpdateUserStatusTC = (status: string ) => (dispatch: Dispatch<ActionProfileType>) => {
    ProfileApi.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0 ) {
                dispatch(updateUserStatusAC(status))
            }
        })
}

export const savePhotoTC = (file: FileList) => (dispatch: Dispatch<ActionProfileType>) => {
    ProfileApi.savePhoto(file)
        .then(res => {
            debugger
            if(res.data.resultCode === 0 ) {
                console.log(res.data.data.photos)
                dispatch(updateUserPhotoAC(res.data.data.photos))
            }
        })
}