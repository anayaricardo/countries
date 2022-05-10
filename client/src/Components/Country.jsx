import React from "react";
import { connect } from "react-redux";
import style from "./CSS/Country.module.css";
import { Link } from "react-router-dom";

export function Country({ pages, Name, cards, countries }) {
  const { country, subDiv, name1, flag, link, cardsStyle, divCards, FlagCard, hide, continents1 } =
    style;
  return (
    <div className={divCards}>
      {countries.map((e, index) => {
        const { id, flags, name, continents } = e;
        if (pages === 0) {
          if (index < 9) {
            return (
                  <Link
                    to={`/Country/${id}`}
                    style={{ textDecoration: "none" }}
                    className={link}
                  >
              <div className={cardsStyle}>
                  <div className={name1}>
                    <h1>
                      {name}
                    </h1>
                  </div>
                  <div className={subDiv}>
                    <img
                      src={flags}
                      alt={`${Name} Flag`}
                      className={cards ? FlagCard : flag}
                    />
                  </div>
                  <div className={continents1}>
                    <h1>
                      {continents}
                    </h1>
                  </div>
                </div>
              </Link>
            );
          }
        } else {
          if (index > pages * 9 && index <= pages * 9 + 10) {
            return (
              <Link
              to={`/Country/${id}`}
              style={{ textDecoration: "none" }}
              className={link}
            >
        <div className={cardsStyle}>
            <div className={name1}>
              <h1>
                {name}
              </h1>
            </div>
            <div className={subDiv}>
              <img
                src={flags}
                alt={`${Name} Flag`}
                className={cards ? FlagCard : flag}
              />
            </div>
            <div className={continents1}>
              <h1>
                {continents}
              </h1>
            </div>
          </div>
        </Link>
            );
          }
        }
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.swapToCards,
    countries: state.filter,
    pages: state.page,
  };
};

export default connect(mapStateToProps)(Country);
