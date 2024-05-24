import axios from 'axios';

export const axiosInstance = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);
