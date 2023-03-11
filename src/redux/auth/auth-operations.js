import * as api from '../../services/auth-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signUp(data);
      // console.log(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

  export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.login(data);
        return result;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
);
  
export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
// );
// export const fetchAddContact = createAsyncThunk(
//   'contacts/add',
//   async (data, thunkAPI) => {
//     try {
//       const result = await api.addContacts(data);
//       return result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: ({ name }, { getState }) => {
//       const { contacts } = getState();
//       const normalizedName = name.toLowerCase();
//       const result = contacts.contacts.find(({ name }) => { 
//       return name.toLowerCase() === normalizedName;
//       });
//       if (result) {
//         alert(`${name} is already ixist`);
//         return false;
//       }
//     },
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/delete',
//   async (id, thunkAPI) => {
//     try {
//       await api.deleteContact(id)
//       return id;
      
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   })