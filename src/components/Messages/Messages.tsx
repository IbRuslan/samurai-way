import React from 'react';
import s from './messages.module.css'

export const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.messages_users} >
                <div className={s.users}>Dymich</div>
                <div className={s.users}>Sergey</div>
                <div className={s.users}>Sherzod</div>
                <div className={s.users}>Milana</div>
                <div className={s.users}>Mama</div>
            </div>
            <div className={s.messages_dialogs}>
                <div className={s.dialog}>Hey</div>
                <div className={s.dialog}>Yo</div>
                <div className={s.dialog}>How are yo</div>
            </div>
        </div>
    );
};
