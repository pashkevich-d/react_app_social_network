import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// const DialogsContainer = (props) => {
//     return <StoreContext.Consumer>
//         {store => {
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (newMessage) => {
//                 store.dispatch(updateNewMessageCreator(newMessage));
//             }
//             return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} messages={store.getState().messages}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

let mapDispatchToPtops = dispatch => {
  return {
    sendMessage: newMessage => {
      dispatch(sendMessageCreator(newMessage));
    }
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToPtops)(AuthRedirectComponent);

// const DialogsContainer = (props) => {
// // debugger;
//     let state = props.store.getState().messages;

//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }

//     let onNewMessageChange = (newMessage) => {
//         props.store.dispatch(updateNewMessageCreator(newMessage));
//     }

//     return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} messages={state}/>
// }

export default compose(
  connect(mapStateToProps, mapDispatchToPtops),
  withAuthRedirect
)(Dialogs);
