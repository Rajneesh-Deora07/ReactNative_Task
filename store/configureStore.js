import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/Sagas';

export const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
