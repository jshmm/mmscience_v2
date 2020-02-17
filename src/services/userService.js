/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { _register, _login } from '../config/api';

async function register(payload) {
  return axios({
    url: _register,
    method: 'post',
    data: payload,
  }).then(data => console.log(data));
}

async function login(payload) {
  console.log(payload);
  return axios({
    url: _login,
    method: 'post',
    data: payload,
  }).then(data => console.log(data));
}
export const userServices = {
  register,
  login,
};
