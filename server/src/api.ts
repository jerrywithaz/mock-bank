import axois from 'axios';

const port = process.env.PORT;

const api = axois.create({
    baseURL: `http://localhost:${port}/`
});

export default api;