import React from 'react';
import s from "./preloader.module.css";
import preloader from "../../../img/preloader/preloader.svg";

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt={''}/>
        </div>
    );
};
