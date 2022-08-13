import axios from 'axios';

const api = axios.create({
  // Website for more details about this api: https://reqres.in/
  baseURL: 'https://reqres.in/api/' // base url for testing api calls. 
});

export default api;