import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './API/postApi';
import postSlice from './postSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postSlice
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware)
});

setupListeners(store.dispatch);