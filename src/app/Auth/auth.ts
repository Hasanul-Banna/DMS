// import api from '@/lib/axios';
import Cookies from 'js-cookie';
import { AxiosInstance } from './Interceptor';

export const login = async (email, password) => {
  try {
    const response = await AxiosInstance.post('/login', { email, password }); // Replace with your API endpoint
    const token = response.data.token; // Adjust according to your API response
    Cookies.set('auth_token', token, { expires: 7 }); // Store the token for 7 days
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || 'Login failed');
  }
};

export const logout = () => {
  Cookies.remove('auth_token'); // Remove the token from cookies
  localStorage.clear();
  sessionStorage.clear();
};
