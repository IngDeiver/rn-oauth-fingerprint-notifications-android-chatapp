import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FBLogin, GooleLogin } from '../../services/auth.service';
import { show } from '../../utils/toast';
import {
  statusCodes,
} from '@react-native-google-signin/google-signin';

const initialState = {
  name: null,
  push_id: null,
  photo: null,
  id: null,
  method: null,
  state: '',
};

const FB = 'FB';
const GOOGLE = 'GOOGLE'

export const loginThunk = createAsyncThunk('users/login', async (params, _) => {
  if (params.method === FB) {
    const profile = await FBLogin();
    if (profile) {
      return {
        name: profile.name,
        push_id: '',
        photo: profile.imageURL,
        id: profile.userID,
        method: FB,
      };
    } else {
      console.log('login with facebook cancelled');
      return {
        ...initialState,
        method: FB,
      };
    }
  } else if (params.method === GOOGLE) {
    const userInfo = await GooleLogin();
    return {
      name: userInfo.user.name,
      push_id: '',
      photo: userInfo.user.photo,
      id: userInfo.user.id,
      method: GOOGLE,
    };
  } else {
    return {
      name: params.username,
      push_id: '',
      photo: null,
      id: null,
      method: params.method
    }
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      return initialState;
    },
  },
  extraReducers: {
    [loginThunk.pending]: (state, _) => {
      return {
        ...state,
        state: 'loading',
      };
    },
    [loginThunk.fulfilled]: (_, action) => {
      if (!action.payload.name && action.payload.method === FB)
        show('error', 'Login error', 'FB authentication  cancelled');

      return {
        ...action.payload,
        state: '',
      };
    },
    [loginThunk.rejected]: (state, action) => {
      if(!action.error.message === statusCodes.SIGN_IN_CANCELLED){
        show('error', 'Login error', action.error.message);
      }
      
      return {
        ...state,
        state: '',
      };;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
