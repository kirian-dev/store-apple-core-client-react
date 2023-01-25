import { API_URL } from '@/common/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../types';
export const productsApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store-apple-core-server-production.up.railway.app',
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[] | null, number>({
      query: () => `api/v1/products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
