/* eslint-disable import/named */
import { combineReducers } from 'redux';
import { user } from '../reducers/userReducer';

export default combineReducers({
  user,
});
