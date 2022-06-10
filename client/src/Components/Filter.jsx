import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import style from "./CSS/Filter.module.css";
import { filterState } from "../actions/actions.js";

export function Filter({ filterState, swapToCards }) {
  let {
    div,
    filter,
    filterBtn,
    subTitle,
    btnDiv,
    form,
    elements,
    options,
    input,
  } = style;

  const [sortByName, setSortByName] = useState(true);
  // const [setCards, cards] = useState(false);
  const [sortByPopulation, setSortByPopulation] = useState(true);
  const [difficulty, setDifficulty] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const [season, setSeason] = useState({
    Summer: false,
    Autumn: false,
    Winter: false,
    Spring: false,
  });
  const [continents, setcontinent] = useState({
    Africa: false,
    America: false,
    Asia: false,
    Europe: false,
    Oceania: false,
    Antarctica: false,
  });

  const difficultyArr = Object.values(difficulty).filter((e) => {
    if (!isNaN(e)) return e;
  });
  const seasonArr = Object.values(season).filter((e) => {
    if (typeof e === "string") return e;
  });
  const continentArr = Object.values(continents).filter((e) => {
    if (typeof e === "string") return e;
  });

  // useEffect(() => {
  //   swapToCards(cards);
  // }, [cards]);

  useEffect(() => {
    filterState(
      sortByName,
      sortByPopulation,
      difficultyArr,
      seasonArr,
      continentArr
    );
  }, [sortByName, sortByPopulation, difficulty, season, continents]);

  function changeStyle() {
    // if (cards === true) {
    //   setCards(false);
    // } else {
    //   setCards(true);
    // }
  }
  function onSortByName() {
    sortByName === true ? setSortByName(false) : setSortByName(() => true);
  }
  function onSortByPopulation() {
    setSortByName(() => null);
    if (sortByPopulation) {
      setSortByPopulation(() => false);
    } else {
      setSortByPopulation(() => true);
    }
  }

  function handleChangeDifficulty(dif) {
    if (dif === 1) {
      setDifficulty({ ...difficulty, one: difficulty.one !== 1 ? 1 : "" });
    } else if (dif === 2) {
      setDifficulty({ ...difficulty, two: difficulty.two !== 2 ? 2 : "" });
    } else if (dif === 3) {
      setDifficulty({ ...difficulty, three: difficulty.three !== 3 ? 3 : "" });
    } else if (dif === 4) {
      setDifficulty({ ...difficulty, four: difficulty.four !== 4 ? 4 : "" });
    } else if (dif === 5) {
      setDifficulty({ ...difficulty, five: difficulty.five !== 5 ? 5 : "" });
    }
  }
  function handleChangeSeason(seas) {
    // setPage(0)
    console.log(seas === "Summer");
    if (seas === "Summer") {
      setSeason({ ...season, Summer: season.Summer === false ? seas : false });
    } else if (seas === "Autumn") {
      setSeason({ ...season, Autumn: season.Autumn === false ? seas : false });
    } else if (seas === "Winter") {
      setSeason({ ...season, Winter: season.Winter === false ? seas : false });
    } else if (seas === "Spring") {
      setSeason({ ...season, Spring: season.Spring === false ? seas : false });
    }
  }
  function handleChangeContinent(cont) {
    // setPage(0)
    if (cont === "Africa") {
      setcontinent({
        ...continents,
        Africa: continents.Africa === false ? cont : false,
      });
    } else if (cont === "America") {
      setcontinent({
        ...continents,
        America: continents.America === false ? cont : false,
      });
    } else if (cont === "Asia") {
      setcontinent({
        ...continents,
        Asia: continents.Asia === false ? cont : false,
      });
    } else if (cont === "Europe") {
      setcontinent({
        ...continents,
        Europe: continents.Europe === false ? cont : false,
      });
    } else if (cont === "Oceania") {
      setcontinent({
        ...continents,
        Oceania: continents.Oceania === false ? cont : false,
      });
    } else if (cont === "Antarctica") {
      setcontinent({
        ...continents,
        Antarctica: continents.Antarctica === false ? cont : false,
      });
    }
  }
  return (
    <div className={div}>
      <div className={filter}>
        <div className={form}>
          <div className={elements}>
            <p className={subTitle}>Activity Difficulty</p>
            <form className={options}>
              <div className={input}>
                <input
                  type="checkbox"
                  value="1"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeDifficulty(1)}
                  id="checkbox1"
                />
                <label for="checkbox1"></label>
                <span>Level 1</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="2"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeDifficulty(2)}
                  id="checkbox2"
                />
                <label for="checkbox2"></label>
                <span>Level 2</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="3"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeDifficulty(3)}
                  id="checkbox3"
                />
                <label for="checkbox3"></label>
                <span>Level 3</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="4"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeDifficulty(4)}
                  id="checkbox4"
                />
                <label for="checkbox4"></label>
                <span>Level 4</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="5"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeDifficulty(5)}
                  id="checkbox5"
                />
                <label for="checkbox5"></label>
                <span>Level 5</span>
              </div>
            </form>
          </div>
          <div className={elements}>
            <p className={subTitle}>Activity Season</p>
            <form className={options}>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Spring"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeSeason("Spring")}
                  id="spring"
                />
                <label for="spring"></label>
                <span>Spring</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Summer"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeSeason("Summer")}
                  id="summer"
                />
                <label for="summer"></label>
                <span>Summer</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Autumn"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeSeason("Autumn")}
                  id="autumn"
                />
                <label for="autumn"></label>
                <span>Autumn</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Winter"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeSeason("Winter")}
                  id="winter"
                />
                <label for="winter"></label>
                <span>Winter</span>
              </div>
            </form>
          </div>
          <div className={elements}>
            <p className={subTitle}>Filter By Continent</p>
            <form className={options}>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Africa"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeContinent("Africa")}
                  id="africa"
                />
                <label for="africa"></label>
                <span>Africa</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="America"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeContinent("America")}
                  id="america"
                />
                <label for="america"></label>
                <span>America</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Asia"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeContinent("Asia")}
                  id="asia"
                />
                <label for="asia"></label>
                <span>Asia</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Europe"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeContinent("Europe")}
                  id="europe"
                />
                <label for="europe"></label>
                <span>Europe</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Oceania"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeContinent("Oceania")}
                  id="oceania"
                />
                <label for="oceania"></label>
                <span>Oceania</span>
              </div>
              <div className={input}>
                <input
                  type="checkbox"
                  value="Antarctica"
                  name="difficulty"
                  style={{ cursor: "pointer", visibility: "hidden" }}
                  onChange={() => handleChangeContinent("Antarctica")}
                  id="antarctica"
                />
                <label for="antarctica"></label>
                <span>Antarctica</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={btnDiv}>
        <input
          type={"button"}
          onClick={onSortByName}
          className={filterBtn}
          value={sortByName ? "Sort By Name (Z-A)" : "Sort By Name (A-Z)"}
        />
        <input
          type={"button"}
          onClick={onSortByPopulation}
          className={filterBtn}
          value={
            !sortByPopulation
              ? "Sort By Higer Population"
              : "Sort By Lower Population"
          }
        />
        {/* <input type={'button'} onClick={changeStyle} className={filterBtn} value={cards ? 'Turn to rows':'Turn to cards '} />  */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    sortName: state.filterState,
    page: state.page,
  };
};

export default connect(mapStateToProps, { filterState })(Filter);
