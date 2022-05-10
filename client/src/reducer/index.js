import {PAGE, GET_COUNTRIES_NAMES, GET_BY_NAME, GET_BY_ID, GET_ALL_ACTIVITIES, FILTER, SEARCH_STATE,SWAP_TO_CARDS, FILTER_STATES} from '../Const/Const';
export const initialState ={
    getByName : [],
    getAll: [],
    getAllActivities: [],
    getById: [],
    filter : [],
    countriesNames: [],
    searchState: [],
    swapToCards : true,
    filterState:true,
    page:0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
            case  FILTER_STATES:
                return {
                    ...state,
                    filterState: action.payload
            }
            case  PAGE:
                return {
                    ...state,
                    page: action.payload
            }
            case  GET_BY_NAME:
                return {
                    ...state,
                    getByName: action.payload
            }
            case  SEARCH_STATE:
                return {
                    ...state,
                    searchState: action.payload
            }
            case   GET_ALL_ACTIVITIES:
                return {
                    ...state,
                    getAllActivities: action.payload
            }
            case  GET_BY_ID :
                return{
                    ...state,
                    getById: action.payload
            }
            case  FILTER :
            return{
                ...state,
                filter: action.payload
            }
            case GET_COUNTRIES_NAMES:
                return{
                    ...state,
                    countriesNames : action.payload
                }
            case  SWAP_TO_CARDS:
                    return {
                        ...state,
                        swapToCards: action.payload
                }

            default:
            return {
                ...state
            }
    }
}

export default rootReducer 