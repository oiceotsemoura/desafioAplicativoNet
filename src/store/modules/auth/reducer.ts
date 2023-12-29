/* eslint-disable no-console */
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ILoginResponse} from '@interfaces/Auth/ILoginResponse';

interface AuthState extends ILoginResponse {}

const initialState: AuthState = {
  email: '',
  firstName: '',
  gender: '',
  id: null,
  image: '',
  lastName: '',
  token: '',
  username: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<AuthState>) => {
      console.log('slice', action.payload);
      state.token = action.payload.token;
    },
  },
});

export const AuthReducer = authSlice.reducer;
export const AuthActions = authSlice.actions;
