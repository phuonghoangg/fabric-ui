import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import typeProductReducer from './typeProductSlice';
import productReducer from './productSlice';
import blogReducer from './blogSlice';
import TypeBlogReducer from './typeBlogSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['docs'],
};

const rootReducer = combineReducers({
  user: userReducer,
  typeProduct: typeProductReducer,
  product: productReducer,
  blog: blogReducer,
  typeBlog: TypeBlogReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
// export default configureStore({
//   reducer: {
//     user: userReducer,
//     typeProduct: typeProductReducer,
//     product: productReducer,
//     blog: blogReducer,
//     typeBlog: TypeBlogReducer,
//   },
// });
