import { API_URL } from '@/common/config';
import Axios from 'axios';

export const instance = Axios.create({
  baseURL: API_URL,
  headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
