import axios from 'axios';
import { HEADER_TOKEN } from '../config';

class HttpService {
  
  static get(url, params = {}) {
    axios.defaults.headers.common['Authorization'] = HEADER_TOKEN;
    return axios
      .get(url, {
        params
      })
      .then(res => res);
  }

  static post(url, params = {}, header = {}) {
    axios.defaults.headers.common['Authorization'] = HEADER_TOKEN;
    return axios.post(url, params, header).then(res => res);
  }
}

export default HttpService;