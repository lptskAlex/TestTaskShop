import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
  endpoints: builder => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
    getAllCarts: builder.query({
      query: () => '/carts',
    }),
  }),
});

export const {useGetAllProductsQuery, useGetAllCartsQuery} = productsApi;
