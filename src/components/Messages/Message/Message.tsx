import React from 'react';
import s from "../messages.module.css";

type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.dialog}>
            <div>{message}</div>
            <div>
            </div>
        </div>
    )
}