import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const _axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default {
  get(url, config) {
    return _axiosInstance.get(url, config)
      .then(res => ({res}))
      .catch(error => ({error}))
  },
  put(url, payload) {
    return _axiosInstance.put(url, payload)
      .then(r => console.log(r.status))
      .catch(error => ({error}))
  },
}
