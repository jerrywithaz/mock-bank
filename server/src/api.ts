import axois from 'axios';

const port = process.env.PORT;

const api = axois.create({
    baseURL: `http://localhost:${port || 4000}/`
});

export default api;