import React, {FC} from 'react';
import {WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'

export const Textarea: FC<WrappedFieldProps > = ({input, meta, ...props}) => {

    const error = meta.touched && meta.error

    return (
        <div style={{width: '100%', marginRight: '10px'}}>
        <div className={s.form + '' + (error ? s.error : '')}>
            <textarea {...input} {...props} className={s.text} />
            {error ? <span className={s.span} >{meta.error}</span> : ''}
        </div>
        </div>
    );
};
