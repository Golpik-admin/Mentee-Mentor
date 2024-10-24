import axios from "axios";

// Create an instance of Axios with default configuration
export const axiosInstance = axios.create({
  baseURL: "https://b8b0-2400-adc1-1df-f800-792e-2fff-30cf-c2f4.ngrok-free.app",
});
// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";

    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
