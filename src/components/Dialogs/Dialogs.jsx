import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink> 
        </div>
    )
};

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}



const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Julia"}, 
        {id: 2, name: "Dasha"}, 
        {id: 3, name: "Pasha"}, 
        {id: 4, name: "Seva"}, 
        {id: 5, name: "Valera"}, 
        {id: 6, name: "Yura"}
    ];

    let messages = [
        {id: 1, message: "Hi!"}, 
        {id: 2, message: "How are you?"}, 
        {id: 3, message: "I am fine"}, 
        {id: 4, message: "Thanks"}, 
        {id: 5, message: "Great"}, 
        {id: 6, message: "See you"}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <MessageItem text={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;