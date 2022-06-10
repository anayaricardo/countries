import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { pages } from "../actions/actions.js";
import style from "./CSS/Countries.module.css";
import Country from "./Country.jsx";

export function Countries({ country, pages, filterState }) {
  const { noCountries, Countries, btnDiv, btnHide, btn, cardsStyle } = style;
  const [page, setPage] = useState(0);
  const [aux, setAux] = useState(filterState); //aux to look at a change into the filterState to set page to 0

  if (aux !== filterState) {
    setPage(0);
    setAux(filterState);
  }
  function onNext() {
    setPage((next) => next + 1);
  }
  function onAfter() {
    setPage((prev) => prev - 1);
  }
  function begin() {
    setPage(0);
  }
  function end() {
    setPage(27);
  }
  useEffect(() => {
    pages(page);
  }, [page]);

  if (country) {
    return (
      <div className={Countries}>
        <div className={btnDiv}>
          <button className={page === 0 ? btnHide : btn} onClick={begin}>
            {"<<"}
          </button>
          <button className={page === 0 ? btnHide : btn} onClick={onAfter}>
            {"<"}
          </button>
          <h4>Page {page + 1}</h4>
          <button
            className={page < Math.floor(country.length / 10) ? btn : btnHide}
            onClick={onNext}
          >
            {">"}
          </button>
          <button className={page === -1 ? btnHide : btn} onClick={end}>
            {">>"}
          </button>
        </div>
        <div className={cardsStyle}>
          <Country />
        </div>
      </div>
    );
  } else {
    return <div className={noCountries}>No countries found</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.filter,
    pages: state.page,
    filterState: state.filterState,
  };
};

export default connect(mapStateToProps, { pages })(Countries);
