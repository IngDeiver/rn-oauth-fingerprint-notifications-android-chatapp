import React, { useCallback } from 'react';
import FBButtonTemplate from './FBButton.template';
import { FBLogin } from '../../services/auth.service'



const FBButtonContainer = ({ onLogin }) => {
  
  const login = useCallback(() => {
    FBLogin()
    .then(profile => {
      if(profile) onLogin({ 
        name: profile.name,
        push_id: '',
        photo: profile.imageURL,
        id:profile.userID
      })
    })
    .catch(err => console.log(err))
  }, []);
  
  return <FBButtonTemplate login={login} />;
};

export default FBButtonContainer;
