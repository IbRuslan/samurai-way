import React from 'react';
import s from './button.module.css'

type ButtonType = {
    name: string
    callback: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonType> = ({name, disabled, callback}) => {

    return (
            <button className={s.button} onClick={callback} disabled={disabled}>{name}</button>
    );
};
