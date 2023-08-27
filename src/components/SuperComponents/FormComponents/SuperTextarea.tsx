import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import s from './SuperTextarea.module.css'
import {maxLengthCreator, requiredFiled} from "../../../utils/validators/validators";
import {Textarea} from "./FormsControls/FormsControls";

export interface MessageFormValues {
    newMessageBody: string;
}

interface MessageFormProps extends InjectedFormProps<MessageFormValues> {}

const maxLength = maxLengthCreator(10)

export const SuperTextarea: React.FC<MessageFormProps> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Field component={Textarea} name='newMessageBody' placeholder='Enter your messages' className={s.text} validate={[requiredFiled, maxLength]} />
            <button className={s.button}>Send</button>
        </form>
    );
};

