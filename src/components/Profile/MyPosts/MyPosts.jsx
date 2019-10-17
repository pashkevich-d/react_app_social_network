import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
            my posts
            </div>
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post message="Мой первый пост" likeCount="1"/>
                <Post message="А вот и мой второй пост" likeCount="15"/>
            </div>
        </div>
    )
}

export default MyPosts;