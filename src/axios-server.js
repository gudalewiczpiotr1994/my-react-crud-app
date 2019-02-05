import axios from 'axios';

const server = axios.create({
    baseURL: 'https://my-react-crud-app.firebaseio.com/'
})

export default server;