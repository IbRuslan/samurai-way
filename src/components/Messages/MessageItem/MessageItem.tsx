import React from 'react';
import {NavLink} from "react-router-dom";

type MessagesType = {
    id: number
    name: string
}

export const MessageItem: React.FC<MessagesType> = ({id, name}) => {
    return (
        <div>
            <NavLink to={"/messages/" + id}>{name}</NavLink>
        </div>
    )
}