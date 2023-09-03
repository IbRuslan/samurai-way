import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileType, profileReducer} from "./profile-reducer";
import {ActionMessagesType, messagesReducer,} from "./messages-reducer";
import {ActionUsersType, userReducer} from "./users-reducer";
import {ActionAuthType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {ActionAppType, appReducer} from "./app-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    users: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type ActionType = ActionProfileType | ActionMessagesType | ActionUsersType | ActionAuthType | ActionAppType;

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof reducers>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export default store


// @ts-ignore
window.store = store;

