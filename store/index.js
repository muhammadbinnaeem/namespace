import { createStore, applyMiddleware, compose  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootInitialState } from './reducer';
import rootEpic from './epic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  rootInitialState,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

export default store;