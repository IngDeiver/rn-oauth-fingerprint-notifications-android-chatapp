import React, { useCallback } from 'react';
import GoogleButtonTemplate from './GoogleButton.tempalate';
import { GooleLogin } from '../../services/auth.service'

const GoogleButtonContainer = ({ onLogin }) => {
  
  const login = useCallback(() => {
    GooleLogin()
    .then(userInfo => {
      onLogin({
        name: userInfo.user.name,
        push_id: '',
        photo: userInfo.user.photo,
        id: userInfo.user.id
      })
    })
    .catch(err => console.log(err))
    
  }, []);
  
 
  
  return <GoogleButtonTemplate login={login}  />;
};

export default GoogleButtonContainer;
