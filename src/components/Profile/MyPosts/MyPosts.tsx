import React from 'react'
import s from './Myposts.module.css'
import {Post} from "./Post/Post";



export const MyPosts = ()=>{
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
        </div>
    )
}