import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/' //'https://us-central1-challenge-4b2b2.cloudfunctions.net/api' // the api url
})

export default instance
