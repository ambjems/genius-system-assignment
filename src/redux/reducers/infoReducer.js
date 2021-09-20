import { SET_SORT_BY, SET_SUBS_DETAILS,SET_FILTER_BY,SET_FILTER_BY_VAL } from '../types/infoTypes';

const initialState = {
    sortBy: 'id',
    filterBy: 'ASD',
    filterByVal:'AS',
    subsDetails: []
  };
  
  const infoReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_SORT_BY: {
        return{
          ...state, sortBy:action.payload
        }
      }

      case SET_SUBS_DETAILS:{
        return{
          ...state, subsDetails:action.payload
        }
      }
      case SET_FILTER_BY:{
        return{
          ...state, filterBy:action.payload
        }
      }
      case SET_FILTER_BY_VAL:{
        return{
          ...state, filterByVal:action.payload
        }
      }
      default:
        return state;
    }

   
   
  };
  
  export default infoReducer;