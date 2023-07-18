import React from 'react'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.preloader__container}>
                <span className={style.preloader__round}></span>
            </div>
        </div>
    )
};

export default Preloader
