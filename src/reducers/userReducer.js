import { USER_REGISTER_SUCCESS } from '../config/actionTypes';

const initialState = {
  auth: false,
};

// eslint-disable-next-line import/prefer-default-export
export function user(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        auth: true,
      };
    default:
      return state;
  }
}
