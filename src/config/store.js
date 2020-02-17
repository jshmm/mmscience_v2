/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const middleWareList = applyMiddleware(reduxThunk);

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line no-undef
export const store = createStore(
  persistedReducer,
  compose(
    middleWareList,
    // eslint-disable-next-line no-underscore-dangle
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export const persistor = persistStore(store);
