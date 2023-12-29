import {combineReducers} from '@reduxjs/toolkit';
import {AuthApi, AuthReducer, ProductApi} from './modules/index';

const reducers = combineReducers({
  [AuthApi.authApi.reducerPath]: AuthApi.authApi.reducer,
  [AuthReducer.authSlice.name]: AuthReducer.authSlice.reducer,
  [ProductApi.productApi.reducerPath]: ProductApi.productApi.reducer,
});

export {reducers};

export type RootState = ReturnType<typeof reducers>;
