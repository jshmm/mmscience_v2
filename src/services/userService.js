/* eslint-disable import/prefer-default-export */
import axios from 'axios';

async function register(payload) {
  return axios({
    url: 'http://localhost:8080/api/users',
    method: 'post',
    data: payload,
  }).then(data => console.log(data));
}

export const userServices = {
  register,
};
