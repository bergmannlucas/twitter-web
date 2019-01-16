import axios from 'axios';

export const baseURL = 'http://twitter-backend-goweek.herokuapp.com';

export const api = axios.create({
  baseURL: baseURL,
});

export default api;