import axios from 'axios';

class HttpService {
  static get(url, params = {}) {
    return axios
      .get(url, {
        params
      })
      .then(res => res);
  }

  static post(url, params = {}, header = {}) {
    return axios.post(url, params, header).then(res => res);
  }
}

export default HttpService;