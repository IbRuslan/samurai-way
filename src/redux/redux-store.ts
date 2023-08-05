import {combineReducers, createStore} from "redux";
import {ActionProfileType, ProfilePageType, profileReducer} from "./profile-reducer";
import {ActionMessagesType, MessagesPageType, messagesReducer,} from "./messages-reducer";
import {ActionUsersType, UsersPageType, userReducer} from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: userReducer
})

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    usersPage: UsersPageType
}

export type ActionType = ActionProfileType | ActionMessagesType | ActionUsersType;

const store = createStore(reducers)

// @ts-ignore
window.store = store;

export default store