import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from './../../../redux/profile-reducer';


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
        // let text = newPost.current.value;
        // props.dispatch(addPostActionCreator()); 
        // newPost.current.value = "";
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
        
    }

    return (
        <div>
            <div className={s.addPostBlock}>
                <textarea ref={newPost} onChange={onPostChange} value={props.newPostText}/> <br/>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;