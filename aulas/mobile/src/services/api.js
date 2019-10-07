import axios from 'axios';

//É necessário trocar a URL da api para que funcione.
const api = axios.create({
    baseURL: 'http://10.3.221.141:3333',
});

export default api;