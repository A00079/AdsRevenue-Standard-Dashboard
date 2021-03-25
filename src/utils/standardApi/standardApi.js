import axios from 'axios';
import Cookies from 'js-cookie';

// Create instance called instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export default {
    read: (url, accessToken) =>
        instance({
            'method': 'GET',
            'url': url,
            'headers': {
                "Authorization": `Bearer ${accessToken}`
            }
        }),
    create: (url, data, accessToken) =>
        instance({
            'method': 'POST',
            'url': url,
            'headers': {
                "Authorization": `Bearer ${accessToken}`
            },
            'data': data
        })
}