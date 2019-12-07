import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


// const MyPostsContainer = (props) => {
//     debugger;
//     let state = props.store.getState();

//     let addPost = () => {
//         // props.addPost();
//         // let text = newPost.current.value;
//         props.store.dispatch(addPostActionCreator()); 
//         // newPost.current.value = "";
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }

//     return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profile.posts} newPostText={state.profile.newPostText}/>)
// };


const mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}

const mapDispatchToPtops = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator()); 
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToPtops)(MyPosts);

export default MyPostsContainer;