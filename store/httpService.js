import axios from 'axios';

class HttpService {
  
  static get(url, params = {}) {
    axios.defaults.headers.common['Authorization'] = 'Token 0e90d66cb48138f9975546045250525398f5f536';
    return axios
      .get(url, {
        params
      })
      .then(res => res);
  }

  static post(url, params = {}, header = {}) {
    axios.defaults.headers.common['Authorization'] = 'Token 0e90d66cb48138f9975546045250525398f5f536';
    return axios.post(url, params, header).then(res => res);
  }
}

export default HttpService;