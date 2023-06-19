import {rerenderEntireTree} from "../render";

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
}

export type MessagesPageType = {
    messagesUsers: MessagesUsers[]
    messagesData: MessagesType[]
}

type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'Im happy', likesCount: 4},
            {id: 3, message: 'Its my first post', likesCount: 16}
        ]
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
        ]
    }
}

export let addPost = (post: string) => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: post,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree();
}

console.log(state.profilePage.posts.length)

export default state