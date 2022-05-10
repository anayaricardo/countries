import React from "react";
import style from "./CSS/Nav.module.css";
import { Link } from "react-router-dom";
import tripper from "../img/TripperLanding.png";
import SearchBar from "./SearchBar.jsx";

export default function Nav() {
  return (
    <div className={style.background}>
      <nav className={style.nav}>
        <div className={style.textAndLogo}>
          <Link to={"/"}>
            <div>
              <img className={style.navImg} src={tripper} alt="img" />
            </div>
          </Link>
        </div>
        <div className={style.navOptions}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <p className={style.option}>Home</p>
          </Link>
          <Link to="/NewActivity" style={{ textDecoration: "none" }}>
            <p className={style.option}>Add a new activity</p>
          </Link>
          <a className={style.option} style={{ textDecoration: "none" }} href="https://restcountries.com/" alt="A cute orange cat lying on its back." target="_blank" rel="noopener noreferrer">
Rest Countries</a>
<a className={style.option} style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/ricardoanaya/" alt="A cute orange cat lying on its back." target="_blank" rel="noopener noreferrer">
Contact</a>
        </div>
        <SearchBar />
      </nav>
    </div>
  );
}
