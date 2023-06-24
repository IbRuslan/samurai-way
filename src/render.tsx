import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost} from "./state/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App addPost={addPost} updateNewPost={updateNewPost}/>,
        document.getElementById('root')
    );
}