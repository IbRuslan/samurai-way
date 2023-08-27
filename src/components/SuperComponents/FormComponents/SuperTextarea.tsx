import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './SuperTextarea.module.css'

export interface MessageFormValues {
    newMessageBody: string;
}

interface MessageFormProps extends InjectedFormProps<MessageFormValues> {}

export const SuperTextarea: React.FC<MessageFormProps> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your messages' className={s.text} />
            <button className={s.button}>Send</button>
        </form>
    );
};

export const ReduxMessageForm = reduxForm<MessageFormValues, {}>({ form: 'messageText' })(SuperTextarea);
