import axios from 'axios';
import store from './store/index'

axios.defaults.baseURL = 'https://us-central1-rolleat.cloudfunctions.net/gateway';
//axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

// Ajouter un intercepteur de requêtes
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    console.log("token : " + token);
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
