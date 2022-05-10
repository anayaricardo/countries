import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { pages } from '../actions/actions.js'
import style from './CSS/Countries.module.css';
import Country from './Country.jsx';
import left from '../img/left.png';
import right from '../img/Right.png';

export  function Countries({country, cards, pages, filterState}){
    const {noCountries, btnDiv, btnHide, imgBtn, btn, cardsStyle} = style
    const [page, setPage] = useState(0)   
    const [aux, setAux] = useState(filterState) //aux to look at a change into the filterState to set page to 0
    
    if(aux !== filterState){
        setPage(0)
        setAux(filterState)
    }
    function onNext(){
        setPage(prev => prev+1 )
    }
    function onAfter(){
        setPage(prev => prev-1 )
    }
    function begin(){
        setPage(0)
    }
    function end(){
        setPage(25)    }
    useEffect(() => {
        pages(page)
    }, [page])

    if(country){
        return(
            <div className={noCountries} >
                <div className={btnDiv}>
                <button className={btn} onClick={begin}>{"<<"} 
                        {/* <img  className={page === 0 ? btnHide :imgBtn} src={left} alt='left'/> */}
                    </button>
                    <button className={page === 0 ? btnHide : btn} onClick={onAfter}>{"<"} 
                        {/* <img  className={page === 0 ? btnHide :imgBtn} src={left} alt='left'/> */}
                    </button>
                        <h4>Page {page +1}</h4>
                    <button className={page < Math.floor(country.length / 10) ? btn  : btnHide} onClick={onNext}>{">"}
                        {/* <img className={page < Math.floor(country.length / 10) ? imgBtn : btnHide } src={right} alt='right'/> */}
                    </button>
                    <button className={btn} onClick={end}>{">>"} 
                        {/* <img  className={page === 0 ? btnHide :imgBtn} src={left} alt='left'/> */}
                    </button>
                </div>
                <div className={cardsStyle}>
                <Country/>
                </div>
                
            </div>
        )
    } else{
        return(
            <div className={noCountries}>Apparently no country is found</div>
        )
    }
};


const mapStateToProps = (state) =>  {
    return {
        cards:state.swapToCards,
        country: state.filter,
        pages:state.page,
        filterState:state.filterState
    }
}

export default connect(mapStateToProps,{pages})(Countries)