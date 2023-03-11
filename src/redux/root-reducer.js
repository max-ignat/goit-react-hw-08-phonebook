import  contactsReducer  from './contacts/contacts-slice';
import  filterReducer  from './filter/filter-slice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer , } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token']
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});




export default rootReducer;


