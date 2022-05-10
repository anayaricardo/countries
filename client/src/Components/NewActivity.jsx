import React, {useState, useEffect} from 'react';
import style from './CSS/NewActivity.module.css';
import { connect } from 'react-redux';
import Nav from'./Nav.jsx'
import  { getCountryNames, createActivity} from '../actions/actions.js'
const { div, form, subDiv, inputClass, btn, inputClass2, btnAdd, countriesDiv, countryBtn,btnBlock, background } = style;

export function NewActivity(props) {
    const [countries, setCountries] = useState([])
    const [data, setData] = useState({
        activityName : '',
        difficulty : '',
        duration:1,
        season:'Select a Season',
        country : 'Select a Country'
    })
    const stateFilled = data.activityName === '' || data.difficulty === 'Select a Difficulty' || data.duration < 1 ||data.season ==='Select a Season' || countries.length < 1
    console.log(stateFilled)
    useEffect(() =>  {
            props.getCountryNames()
        },[])
        

    function onReset(){
        setData({
            activityName : '',
            difficulty : '',
            duration:1,
            season:'Select a Season',
            country : 'Select a Country'
        })
        setCountries([])
    }
    function changeSeason(event){
        setData({...data, season: event.target.value})
    }

    function changeDifficulty(event){
        setData({...data, difficulty: event.target.value})
    }

    function changeCountry(event){
            setData({...data, country: event.target.value})
    }

    function onClose(e){
        let index = countries.indexOf(e.target.value)
        setCountries([...countries.slice(0, index).concat(...countries.slice(index+1, countries.length))])
    }

    function onClick(){
        if(countries.indexOf(data.country) === -1 && data.country !== 'Select a Country'){
        setCountries([...countries, data.country])
        setData({...data, country : 'Select a Country'})
        }
        setData({...data, country : 'Select a Country'})
    }
    

    function onSubmit(){
        if(!stateFilled){
            props.createActivity(
                {name: data.activityName,
                difficulty: data.difficulty, 
                duration: data.duration <1 ? 1: Math.round(data.duration), 
                season: data.season, 
                country: countries.toString()}
            )
        onReset()  
        }else{
            alert('Please fill all the fields')
        }
        
    }

    return (
        <div className={background}>
<Nav />
        <div className={div}  >
            <form className={form}>
                <div className={subDiv}>
                    <label for="name">Activity: </label>
                    <input
                    placeholder="Name of the activity..."
                    value={data.activityName} 
                    className={inputClass} 
                    type="text"
                    onChange={e => {setData({...data, activityName: e.target.value})}} 
                    />
                </div>
                <div className={subDiv}>
                    <label for="difficulty">Difficulty: </label>
                    <select
                    value={data.difficulty} 
                    className={inputClass2} 
                    name="difficulty"
                    onChange={changeDifficulty}
                    >
                        <option>Select the difficulty level...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className={subDiv}>
                    <label for="duration">Duration (hours):</label>
                    <input
                    className={inputClass} 
                    type="number"
                    value={data.duration} 
                    onChange={e => {setData({...data, duration: e.target.value})}}
                    />
                </div>
                <div className={subDiv}>
                <label for="season">Season: </label>
                    <select
                    value={data.season} 
                    className={inputClass2} 
                    name="season"
                    onChange={changeSeason}
                    >   <option>Select the season...</option>
                        <option>Spring</option>
                        <option>Summer</option>
                        <option>Autumn</option>
                        <option>Winter</option>
                    </select>
                </div>
                <div>
                    <div className={subDiv}>
                        <label for="countries">Countries:</label>
                        <div>
                            <select 
                            className={inputClass2}
                            onChange={changeCountry}
                            value={data.countries}
                            >
                            <option>Select the Country...</option>
                            {props.names.map(e => {
                                return (<option>{e}</option>)
                            })
                            }
                            </select>
                </div>
                        </div>
                            <input 
                            onClick={onClick} 
                            className={btnAdd} 
                            type="button" 
                            value="Add countries with that activity" 
                            />
                    </div>
                        <div className={countriesDiv}>

                            {
                            countries.map(e => {
                                return(
                                <input type="button" value={e} className={countryBtn} onClick={onClose} />
                                )
                                
                                })}
                        </div>
                <input className={stateFilled? btnBlock:btn} 
                onClick={onSubmit} 
                type="button" 
                value="Create the new activity" 
                />
                <input className={btn} onClick={onReset} type="button" value="Clean the form" />
            </form>
        </div>
                    </div>
    );
};
function mapStateToProps(state) {
    return{
        names:state.countriesNames,
    }
}

export default connect(mapStateToProps, {getCountryNames, createActivity})(NewActivity)