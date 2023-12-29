import {IEditProductRequest} from '@interfaces/Product/IEditProductRequest';
import {IListProductsResponse} from '@interfaces/Product/IListProductsResponse';
import {IRemoveProductRequest} from '@interfaces/Product/IRemoveProductRequest';
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import {RootState} from '@store/reducers';

const prepareHeaders = (
  headers: Headers,
  {getState}: Pick<BaseQueryApi, 'getState'>,
) => {
  const token = (getState() as RootState).auth.token;

  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};

export const productApi = createApi({
  reducerPath: 'product-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders,
  }),
  endpoints: builder => ({
    listProducts: builder.mutation<IListProductsResponse, {}>({
      query: () => ({
        url: 'products',
        method: 'GET',
      }),
    }),
    editProduct: builder.mutation<{}, IEditProductRequest>({
      query: ({productId, newProduct}) => ({
        url: `products/${productId}`,
        method: 'PUT',
        body: newProduct,
      }),
    }),
    removeProduct: builder.mutation<{}, IRemoveProductRequest>({
      query: ({productId}) => ({
        url: `products/${productId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useEditProductMutation,
  useRemoveProductMutation,
  useListProductsMutation,
} = productApi;
