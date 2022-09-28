import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1lazro1uCi05iHPBoTuZIfyYzJgc3_Di3mgpH4IhyBg'
  }
});
