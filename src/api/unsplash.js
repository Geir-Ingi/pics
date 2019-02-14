import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 6d64e8bd07930342e2a5467b6216152c11b217e510a65e0cc2382d090184c91a'
    }
});