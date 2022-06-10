import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./CSS/Home.module.css";
import { filters } from "../actions/actions.js";
import Filter from "./Filter.jsx";
import Countries from "./Countries.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export function Home(props) {
  useEffect(() => {
    props.filters(
      props.dataByName,
      props.difficulty,
      props.season,
      props.continent,
      props.sortByName,
      props.sortByPopulation
    );
  }, [
    props.sortByName,
    props.sortByPopulation,
    props.difficulty,
    props.season,
    props.continent,
    props.dataByName,
  ]);

  return (
    <div>
      <div className={style.home}>
        <Nav />
        <h1 className={style.One}>
          Learn more about the countries of the world
        </h1>
        <div className={style.filters}>
          <Filter />
          <Countries />
        </div>
      <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sortByName: state.filterState.sortByName,
    sortByPopulation: state.filterState.sortByPopulation,
    difficulty: state.filterState.difficulty,
    season: state.filterState.season,
    continent: state.filterState.continent,
    dataByName: state.getByName,
    country: state.filter,
  };
};
export default connect(mapStateToProps, { filters })(Home);
