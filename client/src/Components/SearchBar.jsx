import React, {useState, useEffect} from 'react';
import style from './CSS/SearchBar.module.css';
import  { getByName } from '../actions/actions.js'
import { connect } from 'react-redux';

export  function SearchBar({getByName}){
    const[country, setCountry] =useState('')
    
    useEffect(() =>  {
        getByName(country)
    },[onSearch])

    function onSearch(countryByName) {
        setCountry(countryByName);
    }

    return(
        <form 
        className={style.divBar} 
        onSubmit={e => {
            e.preventDefault();
            onSearch(country);
            setCountry(country)
        }}>
            <input
                type="text"
                placeholder=" Search for a country"
                value={country}
                onChange={e => {setCountry(e.target.value)}}
                className={style.input}
            />
        </form>
    );
};
function mapStateToProps(state) {
    return{
        countryByName: state.getByName
    }
}

export default connect(mapStateToProps, {getByName})(SearchBar)