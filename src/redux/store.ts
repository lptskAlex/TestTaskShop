import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import {productsApi} from '../services/productsApi';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  productsApi: productsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PERSIST, REGISTER],
      },
    }).concat(productsApi.middleware),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
