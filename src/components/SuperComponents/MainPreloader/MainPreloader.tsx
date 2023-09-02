import React from 'react';
import styles from './MainPreloader.module.css'

const MainPreloader = () => {
    return (
        <div>
            <div className={styles.about}>
                <a className={`${styles.bg_links} ${styles.social} ${styles.portfolio}`} href="https://www.rafaelalucas.com" target="_blank">
                    <span className={styles.icon}></span>
                </a>
                <a className={`${styles.bg_links} ${styles.social} ${styles.dribbble}`} href="https://dribbble.com/rafaelalucas" target="_blank">
                    <span className={styles.icon}></span>
                </a>
                <a className={`${styles.bg_links} ${styles.social} ${styles.linkedin}`} href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                    <span className={styles.icon}></span>
                </a>
                <a className={`${styles.bg_links} ${styles.logo}`}></a>
            </div>

            <div className={styles.content}>
                <div className={styles.loading}>
                    <p>loading</p>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default MainPreloader;