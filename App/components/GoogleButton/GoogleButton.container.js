import React, { useCallback } from 'react';
import GoogleButtonTemplate from './GoogleButton.tempalate';
import { GooleLogin } from '../../services/auth.service'

const GoogleButtonContainer = ({ onLogin }) => {

  const [isLogin, setIsLogin] = React.useState(false);

  const login = useCallback(() => {
    setIsLogin(true)
    GooleLogin()
    .then(userInfo => {
      setIsLogin(false)
      onLogin({
        name: userInfo.user.name,
        push_id: '',
        photo: userInfo.user.photo,
        id: userInfo.user.id,
        method: 'GOOGLE',
        accessToken: userInfo.accessToken
      })
    })
    .catch(err => {
      setIsLogin(false)
      console.log(err)
    })
    
  }, []);
  
 
  
  return <GoogleButtonTemplate login={login} isLogin={isLogin} />;
};

export default GoogleButtonContainer;
