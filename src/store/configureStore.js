import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'users', 'sales'],
};

function getMiddlewares() {
  return [thunk, logger];
}

function getComposedEnhancers(enhancers) {
  return compose(...enhancers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    );
}

export default function configureStore(preloadedState = {}) {
  const middlewares = getMiddlewares();
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = getComposedEnhancers(enhancers);

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, preloadedState, composedEnhancers, );
  const persistor = persistStore(store);

  return { store, persistor };
}
