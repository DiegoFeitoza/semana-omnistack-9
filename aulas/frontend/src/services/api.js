import axios from 'axios'

const api = axios.create({
    baseURL: "https://dk-backend-aircnc.herokuapp.com/"
});

export default api;