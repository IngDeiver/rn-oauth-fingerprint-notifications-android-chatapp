import React, { useCallback } from 'react';
import GoogleButtonTemplate from './GoogleButton.tempalate';
import { loginThunk } from '../../redux/reducers/auth.reducer'
import { useDispatch } from 'react-redux';

const GoogleButtonContainer = () => {
  const dispatch = useDispatch()
  const login = useCallback(() => {
    dispatch(loginThunk({ method: 'GOOGLE' }))
  }, []);
  
 
  
  return <GoogleButtonTemplate login={login} />;
};

export default GoogleButtonContainer;
