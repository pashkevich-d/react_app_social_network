import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator
} from "./../../../redux/profile-reducer";
import { Field, reduxForm } from "redux-form";
import {
  requiredField,
  maxLengthCreator
} from "../../../utils/validators/validatots";
import { Textarea } from "../../common/FormsControls/FormControls";

// class MyPosts extends React.PureComponent {
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps != this.props || nextState != this.state;
//   // }

//   render() {
//     let postsElements = this.props.posts.map(p => (
//       <Post message={p.message} likeCount={p.likesCount} />
//     ));

//     let newPost = React.createRef();

//     let onAddPost = values => {
//       this.props.addPost(values.newPostText);
//       // let text = newPost.current.value;
//       // props.dispatch(addPostActionCreator());
//       // newPost.current.value = "";
//     };

//     return (
//       <div>
//         <AddNewPostFormRedux onSubmit={onAddPost} />
//         <div className={s.posts}>{postsElements}</div>
//       </div>
//     );
//   }
// }

const MyPosts = React.memo(props => {
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
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={s.addPostBlock}>
      <Field
        name="newPostText"
        component={Textarea}
        validate={[requiredField, maxLength10]}
        placeholder="Post message"
      />{" "}
      <br />
      <button>Add post</button>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
