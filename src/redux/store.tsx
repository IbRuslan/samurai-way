import {addPostActionType, profileReducer, UpdateNewPostActionType} from "./profile-reducer";
import {addMessageActionType, messagesReducer, updateNewMessagesActionType} from "./messages-reducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MessagesUsers = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type MessagesPageType = {
    messagesUsers: MessagesUsers[]
    messagesData: MessagesType[]
    newMessagesText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type ActionType =
    addPostActionType | UpdateNewPostActionType | addMessageActionType | updateNewMessagesActionType

type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    dispatch: (action: ActionType) => void
    subscribe: (observer: () => void) => void
}


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Im happy', likesCount: 4},
                {id: 3, message: 'Its my first post', likesCount: 16}
            ],
            newPostText: ''
        },
        messagesPage: {
            messagesUsers: [
                {id: 1, name: 'Ruslan'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Sherzod'},
                {id: 4, name: 'Milana'},
                {id: 5, name: 'Miraziz'}
            ],
            messagesData: [
                {id: 1, message: 'He'},
                {id: 2, message: 'How are yo'},
                {id: 3, message: 'Yo'}
            ],
            newMessagesText: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('redux changed')
    },
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        this._callSubscriber()
    },
    subscribe (observer: () => void)  {
        this._callSubscriber = observer
    }

}
export default store
