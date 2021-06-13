import React, { useCallback } from 'react';
import GoogleButtonTemplate from './GoogleButton.tempalate';
import { GooleLogin } from '../../services/auth.service'

const GoogleButtonContainer = () => {
  
  const login = useCallback(() => {
    GooleLogin()
    .then(userInfo => console.log(userInfo))
    .catch(err => console.log(err))
    
  }, []);
  
 
  
  return <GoogleButtonTemplate login={login}  />;
};

export default GoogleButtonContainer;
