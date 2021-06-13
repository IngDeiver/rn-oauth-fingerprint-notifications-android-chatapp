import React, { useCallback } from 'react';
import FBButtonTemplate from './FBButton.template';
import { FBLogin } from '../../services/auth.service'



const FBButtonContainer = () => {
  
  const login = useCallback(() => {
    FBLogin()
    .then(profile => console.log(Object.keys(profile)))
    .catch(err => console.log(err))
  }, []);
  
  return <FBButtonTemplate login={login} />;
};

export default FBButtonContainer;
