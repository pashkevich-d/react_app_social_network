import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import {sendMessageCreator, updateNewMessageCreator} from './../../redux/dialogs-reducer';



const Dialogs = (props) => {
    // debugger;
    let state = props.messages;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map( m => <MessageItem text={m.message} />);

    let newMessage = state.newMessage;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessage(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea placeholder="Enter your message" 
                                   value={newMessage}
                                   onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={ onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;