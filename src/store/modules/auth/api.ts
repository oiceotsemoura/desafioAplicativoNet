import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/auth',
  }),
  endpoints: builder => ({
    signIn: builder.mutation({
      query: ({username, password}) => ({
        url: 'login',
        method: 'POST',
        body: {username, password},
      }),
    }),
  }),
});

export const {useSignInMutation} = authApi;
