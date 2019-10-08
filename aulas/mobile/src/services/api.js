import axios from 'axios';

//É necessário trocar a URL da api para que funcione.
const api = axios.create({
    baseURL: 'https://dk-backend-aircnc.herokuapp.com',
});

export default api;