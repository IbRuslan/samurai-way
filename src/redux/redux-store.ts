import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, UpdateNewPostActionType} from "./profile-reducer";
import {addMessageActionType, MessagesPageType, messagesReducer, updateNewMessagesActionType} from "./messages-reducer";
import {ProfilePageType} from "./profile-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type ActionType =
    addPostActionType | UpdateNewPostActionType | addMessageActionType | updateNewMessagesActionType

export type StoreType = {
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
    subscribe: (observer: () => void) => void
} 

const store = createStore(reducers)

export default store