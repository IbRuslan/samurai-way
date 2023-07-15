import {ActionType} from "./store";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Im happy', likesCount: 4},
        {id: 3, message: 'Its my first post', likesCount: 16}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost);
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            break;
    }
    return state
}

export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostActionCreator>
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostActionCreator = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)