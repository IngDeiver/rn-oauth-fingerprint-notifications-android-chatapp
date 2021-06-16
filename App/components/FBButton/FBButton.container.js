import React, {useCallback} from 'react';
import FBButtonTemplate from './FBButton.template';
import { loginThunk } from '../../redux/reducers/auth.reducer'
import { useDispatch } from 'react-redux';

const FBButtonContainer = () => {

  const dispatch = useDispatch()
  const login = useCallback(() => {
    dispatch(loginThunk({ method: 'FB' }))
  }, []);

  return <FBButtonTemplate login={login} />;
};

export default FBButtonContainer;
