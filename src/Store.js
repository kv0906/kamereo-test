import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import RootReducer from './RootReducer';
import rootSaga from './App/AppSagas';

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const middleware = applyMiddleware(
  sagaMiddleware,
  logger,
);

const store = createStore(
  RootReducer,
  middleware,
);

sagaMiddleware.run(rootSaga)


export default store;
