import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com',
});

export default api;
