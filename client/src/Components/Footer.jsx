import React from "react";
import style from "./CSS/Footer.module.css";
import { Link } from "react-router-dom";
import tripper from "../img/TripperLanding.png";

export default function Landing() {
  return (
    <div className={style.background}>
      <div className={style.buttonAndTitle}>
        <div className={style.Title}>
          <h1 className={style.One}>
          Explore the activities you can do in each country
          </h1>
          <h1 className={style.Two}>
          You can also create your own activities in the following button
          </h1>
        </div>
        <div>
          <Link to="/NewActivity">
            <button className={style.Button}>Add a new activity</button>
          </Link>
        </div>
        <Link to="/">
        <img src={tripper} alt="tripper" className={style.tripper} />
        </Link>
        <div className={style.Title}>
          <h1 className={style.Three}>
            *Tripper is made with React and a lot of {"❤"}
          </h1>
        </div>
      </div>
    </div>
  );
}
