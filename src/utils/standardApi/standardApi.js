import axios from 'axios';
let base_url = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // DEV Code
    base_url = process.env.REACT_APP_DEV_BASE_URL

} else {
    // PRODUCTION Code
    base_url = process.env.REACT_APP_PROD_BASE_URL
}

// Create instance called instance
const instance = axios.create({
    baseURL: base_url
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