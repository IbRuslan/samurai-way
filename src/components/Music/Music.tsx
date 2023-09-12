import React from 'react';
import s from './music.module.css'
import inProgress from './../../img/urlImg/inProgres.jpg'

export const Music = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{margin: '30px'}} src={inProgress} alt="inProgress"/>
        </div>
    );
};