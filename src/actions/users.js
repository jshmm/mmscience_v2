/* eslint-disable import/prefer-default-export */
import { USER_REGISTER_SUCCESS } from '../config/actionTypes';
import { userServices } from '../services/userService';

function register(data) {
  function success(payload) {
    return { type: USER_REGISTER_SUCCESS, payload };
  }
  return dispatch => {
    userServices.register(data);
    dispatch(success(data));
  };
}

export const userActions = {
  register,
};
