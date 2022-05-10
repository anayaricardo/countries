import React from 'react';
import style from './CSS/Landing.module.css';
import { Link } from 'react-router-dom';
import tripper from '../img/TripperLanding.png';

export default function Landing(){
    return(
        <div className={style.background}>
            <div className={style.buttonAndTitle}>
                <img src={tripper} alt="tripper" className={style.tripper}/>
                <div className={style.Title}>
                    <h1 className={style.One}>Discover the world with unforgettable travel experiences</h1>
                    <h1 className={style.Two}>Find out all the important details for your trip</h1>
                </div>
                <div>
                <Link to='/home'>
                    <button className={style.Button}>START YOUR ADVENTURE</button>
                </Link>
                </div>
                <div className={style.Title}>
                    <h1 className={style.Three}>*Get information about countries via a RESTful API</h1>
                    </div>
            </div>
        </div>
    );
};