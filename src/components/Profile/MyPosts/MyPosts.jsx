import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Мой первый пост", likesCount: 12}, 
        {id: 2, message: "А вот и мой второй пост", likesCount: 4}
    ];

    let postsElements = posts.map( p => <Post message={p.message} likeCount={p.likesCount}/>);

    return (
        <div>
            <div className={s.addPost}>
                <textarea></textarea> <br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;