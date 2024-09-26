import axios from 'axios';

// Create an instance of Axios with default configuration
export const axiosInstance = axios.create();

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Set the 'Content-Type' header to 'application/json'
    config.headers['Content-Type'] = 'application/json';

    // Set the 'Accept' header to 'application/json'
    config.headers['Accept'] = 'application/json';

    // You can add your token handling logic here
    // For example, you can store the token in localStorage or a state variable and retrieve it as needed
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
