import axios from 'axios';
const KEY = 'AIzaSyAYH4hmB53Acg-zqlIjiIyBPkz4i-dehJk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    type: 'video',
    part: 'snippet',
    maxResults: 5
  }
});
