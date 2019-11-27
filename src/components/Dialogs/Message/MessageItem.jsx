import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div>
            <div className={s.message}>{props.text}</div>
        </div>
    )
}

const addMessage = () => {
    return (
        <div >
         <textarea /> <br/>
         <button >Add post</button>
        </div>
    )
}

export default MessageItem;