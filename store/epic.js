import { combineEpics } from 'redux-observable';

import { MapEpic } from '../screens';

export default combineEpics(
  MapEpic.getAllTasks
);