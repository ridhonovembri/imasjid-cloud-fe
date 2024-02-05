import axios from "axios";

export default axios.create({
    // baseURL: 'http://localhost:3000/api/',
    // baseURL: 'https://imasjid-cloud-be.vercel.app/api/',
    baseURL: 'api/',
    headers: {
        'Content-Type': 'application/json'
    }
})