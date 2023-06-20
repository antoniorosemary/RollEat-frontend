import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

// Ajouter un intercepteur pour inclure le cookie dans les requêtes sortantes
/*axios.interceptors.request.use(config => {
    const token = getCookieValue('access_token'); // Remplacez "getCookieValue" par la fonction appropriée pour extraire la valeur du cookie
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  });

  
// Exemple de fonction pour extraire la valeur d'un cookie
function getCookieValue(name: string) {
    const cookies = document.cookie.split('; ');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
  
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
  
    return '';
  }*/