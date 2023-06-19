import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./state/state";

ReactDOM.render(
    <App addPost={addPost}/>,
  document.getElementById('root')
);