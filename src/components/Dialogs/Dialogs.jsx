import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {
  sendMessageCreator,
  updateNewMessageCreator
} from "./../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = props => {
  // debugger;
  let state = props.messages;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map(m => (
    <MessageItem text={m.message} />
  ));

  let newMessage = state.newMessage;

  let addNewMesage = values => {
    props.sendMessage(values.newMessage);
  };

  if (!props.isAuth) return <Redirect to={"/Login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMesage} />
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          component="textarea"
          name="newMessage"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
