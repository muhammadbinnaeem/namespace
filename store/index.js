import { createStore, applyMiddleware, compose  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'remote-redux-devtools';

import { rootReducer, rootInitialState } from './reducer';
import rootEpic from './epic';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 19001 });
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  rootInitialState,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);

export default store;