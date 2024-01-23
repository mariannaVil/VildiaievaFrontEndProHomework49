import axios from 'axios';

const api = axios.create({
    baseURL: 'https://65aa3b08081bd82e1d9668e9.mockapi.io/',
    headers: { 'Content-Type': 'application/json' },
  });
  
  export default api;
