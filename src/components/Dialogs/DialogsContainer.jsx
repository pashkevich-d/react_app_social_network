import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer';



const DialogsContainer = (props) => {
debugger;
    let state = props.store.getState().messages;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageCreator(newMessage));
    }

    return <Dialogs updateNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} messages={state}/>
}

export default DialogsContainer;