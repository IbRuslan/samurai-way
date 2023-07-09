import {ActionType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
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
export type UpdateNewPostActionType = ReturnType<typeof updateNewPostActionText>
export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostActionText = (text: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)