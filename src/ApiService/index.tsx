import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tor.appdevelopers.mobi/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
