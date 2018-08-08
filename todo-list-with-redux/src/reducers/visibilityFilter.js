import { SET_VISIBILITY_FILTER, visibilityFilters } from '../actionTypes/filters';

const initialState = visibilityFilters.SHOW_ALL;

const visibilityFilterReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
