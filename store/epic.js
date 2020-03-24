import { combineEpics } from 'redux-observable';

import { MapEpic,addTaskEpic } from '../screens';

export default combineEpics(
  MapEpic.getAllTasks,
  addTaskEpic.addTask
);