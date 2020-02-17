/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWareList = applyMiddleware(reduxThunk);

// eslint-disable-next-line no-undef
export const store = createStore(
  rootReducer,
  compose(
    middleWareList,
    // eslint-disable-next-line no-underscore-dangle
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
