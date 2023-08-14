import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileType, ProfilePageType, profileReducer} from "./profile-reducer";
import {ActionMessagesType, MessagesPageType, messagesReducer,} from "./messages-reducer";
import {ActionUsersType, UsersPageType, userReducer} from "./users-reducer";
import {AuthPageType, authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: userReducer,
    auth: authReducer
})

export type RootStateType = {
    profile: ProfilePageType
    messages: MessagesPageType
    users: UsersPageType
    auth: AuthPageType
}

export type ActionType = ActionProfileType | ActionMessagesType | ActionUsersType;

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store;

export default store