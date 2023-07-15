import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App state={store.getState()}/>
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)