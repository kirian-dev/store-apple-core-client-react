import { API_URL } from '@/common/config';
import Axios from 'axios';

export const api = Axios.create({
  baseURL: API_URL,
  headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
