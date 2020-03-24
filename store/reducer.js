import { combineReducers } from 'redux';

import { mapReducer, initialmapReducer } from '../screens';

export const rootInitialState = {
  map: initialmapReducer
};

export const rootReducer = combineReducers({
  map: mapReducer
});