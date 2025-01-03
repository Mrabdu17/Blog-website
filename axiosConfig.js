import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this is the correct base URL of your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
