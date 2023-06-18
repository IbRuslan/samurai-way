import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type Posts = {
    id: number
    message: string
    likesCount: number
}

let posts: Posts[] = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: 'Im happy', likesCount: 4},
    {id: 3, message: 'Its my first post', likesCount: 16}
]

export type DialogsData = {
    id: number
    name: string
}

let dialogsData: DialogsData[] = [
    {id: 1, name: 'Ruslan'},
    {id: 2, name: 'Sergey'},
    {id: 3, name: 'Sherzod'},
    {id: 4, name: 'Milana'},
    {id: 5, name: 'Miraziz'}
]

export type MessagesData = {
    id: number
    message: string
}

let messagesData: MessagesData[] = [
    {id: 1, message: 'He'},
    {id: 2, message: 'How are yo'},
    {id: 3, message: 'Yo'}
]

ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);