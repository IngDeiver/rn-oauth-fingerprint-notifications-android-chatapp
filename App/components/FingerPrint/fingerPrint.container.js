import React, { useCallback } from 'react';
import FingerPrintTemplate from './fingerPrint.tamplete';
import { BiometricLogin } from '../../services/auth.service';
import { loginThunk } from '../../redux/reducers/auth.reducer'
import { useDispatch } from 'react-redux';

const FingerPrintContainer = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = useCallback(() => setVisible(true));
  const hideDialog = useCallback(() => setVisible(false));
  const dispatch = useDispatch()

  const autthenticate = useCallback(() => {
    BiometricLogin()
      .then(_ => {
        showDialog();
      })
      .catch(err => console.log(err));
  });

  const login = useCallback((username) => {
    dispatch(loginThunk({ username, method: 'FINGER_PRINT' }))
    hideDialog()
  })

  return (
    <FingerPrintTemplate
      autthenticate={autthenticate}
      hideDialog={hideDialog}
      visible={visible}
      login={login}
    />
  );
};

export default FingerPrintContainer;
