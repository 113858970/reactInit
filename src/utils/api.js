import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({});

// Add a request interceptor
axios.interceptors.request.use(
  // Do something before request is sent
  (config) => {
    const reqConfig = config;
    // reqConfig.url = `/api/${config.url}`;
    return reqConfig;
  },
  // Do something with request error
  error => Promise.reject(error)
);

export default instance;
