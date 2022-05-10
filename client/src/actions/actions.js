import axios from "axios";
import {PAGE, GET_COUNTRIES_NAMES, GET_BY_NAME, GET_ALL_ACTIVITIES, GET_BY_ID, FILTER, SEARCH_STATE, FILTER_STATES} from '../Const/Const';

export const filters =  (name, difficulty, season, continents, sortByName, SortByPopulation) => async dispatch =>{
        const url = (name.length > 0) ? `http://localhost:3001/country/getAll?name=${name}` :'http://localhost:3001/country/getAll'
        axios.get(url)
        .then(response => {
        const db = response.data

        let aux = db.filter(e => {
            if(difficulty === undefined || !difficulty[0]){
                return e 
            }else{
                for(let i=0; i < difficulty.length; i++) {
                    for(let j=0; j < e.activities.length; j++){
                            if(difficulty[i] === parseInt(e.activities[j].difficulty)){ 
                                return e 
                            }
                    }
                }
            }
        })
        if(aux.length === 0){// SI YA SE SE RECORRIO PERO NO SE ENCONTRO NADA
            aux = [] // RETORNA UN ARR VACIO
        }
        
        let aux2 = aux.filter(e=> {
            if(season=== undefined || !season[0]){
                return e
            }else{
                for(let i=0; i < season.length; i++) {
                    for(let j=0; j < e.activities.length; j++){
                            if(season[i] === e.activities[j].season){
                                return e
                            }
                    }
                }
            }
        })
        if(aux2.length === 0){
            aux2 = []
        }

        let aux3 = aux2.filter(e => {
            if(continents === undefined || !continents[0]){ 
                return e
            }else{              
                for(let i=0; i < continents.length; i++) {
                            if(continents[i] === e.continents){
                                return e
                            }
                }
            }
        })
        if(aux2.length === 0){
            aux3 = []
        }
            let order = []

            if(sortByName === true){
                order = aux3.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                        return 0;
                });
            }else if(sortByName === false){
                order  = aux3.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                        return 0;
                });

            }else if(SortByPopulation === false){
                order  = aux3.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (a.population < b.population) {
                        return 1;
                    }
                        return 0;
                });
            }else if(SortByPopulation === true){
                order  = aux3.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (a.population < b.population) {
                        return -1;
                    }
                        return 0;
                });
            }
                dispatch({
                    type:FILTER,
                    payload: order
                }) 
        })

}


export const getCountryNames = () => async (dispatch) => {
    const db = await axios.get('http://localhost:3001/country/getAll')
    const names = db.data.map(e => e.name)
    let order = names.sort(function (a, b) {
                    if (a > b) {
                        return 1;
                    }
                    if (a < b) {
                        return -1;
                    }
                        return 0;
                });           
    dispatch({
        type: GET_COUNTRIES_NAMES,
        payload: order
    })
}

export const getById = (id) => {
    return  (dispatch, getState) =>{
            axios
            .get(`http://localhost:3001/country/${id}`)
            .then(response => {
                const getById = response.data
                dispatch({
                    type: GET_BY_ID,
                    payload: getById,
                })
            })           
    }
}

export const getByName =(name) =>{
    return  (dispatch, getState) =>{
            dispatch({
                type: GET_BY_NAME,
                payload:name
            })
    }
}

export const getAllActivities = () => {
    return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/activity')
        dispatch({type: GET_ALL_ACTIVITIES, payload: response.data })
    }
}

export const searchName = (state) => {
    return async(dispatch) => {
            dispatch({type: SEARCH_STATE, payload: [state] })
    }
}

export const createActivity = (details) => {
    return async function(){
        if(details.name !== undefined && details.name !== '' && details.country.length > 0 && details.country !== 'Select a Country' && details.difficulty !== 'Select a Difficulty' && details.season !== 'Select a Season'){
            await axios.post('http://localhost:3001/activity', details)
            alert(`The activity ${details.name} has been created!`)
        }else{
            alert('Please fill all the fields')
        }      
    }
}

// export const swapToCards = (state) =>{
//     return async(dispatch) => {
//         dispatch({
//             type: SWAP_TO_CARDS, 
//             payload: state })
//     }
// }

export const filterState = (sortByName, sortByPopulation, difficulty, season, continent) =>{

    return async(dispatch) => {
        const state ={sortByName, sortByPopulation, difficulty, season, continent}
        dispatch({
            type: FILTER_STATES, 
            payload: state })
    }
}

export const pages = (page) =>{

    return async(dispatch) => {

        dispatch({
            type: PAGE, 
            payload: page })
    }
}