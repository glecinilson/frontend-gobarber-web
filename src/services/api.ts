import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.24.63.80:3333',
});

export default api;
