import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e3843-default-rtdb.firebaseio.com/'
});

export default instance;