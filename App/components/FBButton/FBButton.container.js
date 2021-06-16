import React, {useCallback} from 'react';
import FBButtonTemplate from './FBButton.template';
import {FBLogin} from '../../services/auth.service';

const FBButtonContainer = ({ onLogin }) => {
  const [isLogin, setIsLogin] = React.useState(false);

  const login = useCallback(() => {
    setIsLogin(true);
    FBLogin()
      .then(profile => {
        setIsLogin(false);
        if (profile) {
          onLogin({
            name: profile.name,
            push_id: '',
            photo: profile.imageURL,
            id: profile.userID,
            method: 'FB',
            accessToken: profile.accessToken,
          });
        } else {
          console.log('login with facebook cancelled');
        }
      })
      .catch(err => {
        setIsLogin(false);
        console.log(err);
      });
  }, []);

  return <FBButtonTemplate login={login} isLogin={isLogin} />;
};

export default FBButtonContainer;
