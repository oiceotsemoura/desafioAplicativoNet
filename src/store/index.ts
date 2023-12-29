import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

import middleware from './middleware';
import {reducers, RootState} from './reducers';

const config: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
};

export const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);

export {store, persistor};
