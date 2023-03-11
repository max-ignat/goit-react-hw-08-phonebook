import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,
 
  persistStore,
} from 'redux-persist';
import rootReducer from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
// export default store;