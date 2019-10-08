import axios from 'axios';

//É necessário trocar a URL da api para que funcione.
const api = axios.create({
    baseURL: 'http://192.168.0.104:3333',
});

export default api;