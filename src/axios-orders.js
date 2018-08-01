import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn-react-burger-app.firebaseio.com/'
});

export default instance;