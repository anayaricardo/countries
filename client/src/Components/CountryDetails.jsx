import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./CSS/CountryDetails.module.css";
import { getById } from "../actions/actions.js";
import Nav from "./Nav.jsx";

const {
  bar,
  CountryDetail,
  activities,
  activitiesDiv,
  spanText,
  dataDiv,
  nav,
  flag,
} = style;

export function CountryDetails(props) {
  let actualId = window.location.pathname.slice(9);
  useEffect(() => {
    props.getById(actualId);
  }, []);

  return (
    <div className={nav}>
      <Nav />
      <div className={CountryDetail}>
        {props.byId.getById.map((e) => {
          const {
            flags,
            name,
            continents,
            capital,
            subregion,
            area,
            population,
          } = e;
          return (
            <div className={dataDiv}>
              <div>
                <h1>{name}</h1>
                <img className={flag} src={flags} alt="Flag" id="flag" />
                <h2>Continent: {continents}</h2>
                <h3>Capital: {capital}</h3>
                <h3>Subregion: {subregion}</h3>
                <h3>
                  Area: {area} km<sup>2</sup>
                </h3>
                <h3>Population: {population} habitants</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className={CountryDetail}>
        {props.byId.getById.map((e) => {
          return (
            <div className={dataDiv}>
              <div className={activitiesDiv}>
                <h2>Activities</h2>
                <div className={bar}>
                  <span className={spanText}>Activity</span>
                  <span className={spanText}>Difficulty</span>
                  <span className={spanText}>Duration</span>
                  <span className={spanText}>Season</span>
                </div>
                {e.activities.length < 1 ? (
                  <div className={activities}>Add new activities in the navigation menu</div>
                ) : (
                  e.activities.map((e) => {
                    const { name, difficulty, duration, season } = e;

                    return (
                      <div className={activities}>
                        <span className={spanText}>{name}</span>
                        <span className={spanText}>{difficulty}</span>
                        <span className={spanText}>{duration} hours</span>
                        <span className={spanText}>{season}</span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    byId: state,
  };
}

export default connect(mapStateToProps, { getById })(CountryDetails);
