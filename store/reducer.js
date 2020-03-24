import { combineReducers } from 'redux';

import { mapReducer, initialmapReducer, initialaddTaskReducer, addTaskReducer } from '../screens';

export const rootInitialState = {
  map: initialmapReducer,
  addTask: initialaddTaskReducer
};

export const rootReducer = combineReducers({
  map: mapReducer,
  addTask: addTaskReducer
});