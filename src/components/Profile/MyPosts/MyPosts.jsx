import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from "./../../../redux/profile-reducer";
import { Field, reduxForm } from "redux-form";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likesCount} />
  ));

  let newPost = React.createRef();

  let onAddPost = values => {
    props.addPost(values.newPostText);
    // let text = newPost.current.value;
    // props.dispatch(addPostActionCreator());
    // newPost.current.value = "";
  };

  return (
    <div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

let AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={s.addPostBlock}>
      <Field name="newPostText" component="textarea" /> <br />
      <button>Add post</button>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
