import React from 'react';
import notFound from './../../../img/urlImg/notFound.jpg'

export const NotFound = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '80%'}}>
            <img style={{maxWidth: '50%', margin: '30px'}} src={notFound} alt="404"/>
        </div>
    );
};