import {GetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {AuthApi, ProductApi} from './modules';

export default (getDefaultMiddleware: GetDefaultMiddleware) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false,
  }).concat([AuthApi.authApi.middleware, ProductApi.productApi.middleware]);

  return middleware;
};
