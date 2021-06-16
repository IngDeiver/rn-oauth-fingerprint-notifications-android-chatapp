import React, {useCallback} from 'react';
import FingerPrintTemplate from './fingerPrint.tamplete';
import {BiometricLogin} from '../../services/auth.service';

const FingerPrintContainer = ({ onLogin }) => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = useCallback(() => setVisible(true));
  const hideDialog = useCallback(() => setVisible(false));

  const autthenticate = useCallback(() => {
    BiometricLogin()
      .then(res => {
        showDialog();
      })
      .catch(err => console.log(err));
  });

  const login = useCallback((username) => {
    onLogin({
      name: username,
      push_id: '',
      photo: null,
      id: null,
      method: 'FINGER_PRINT'
    })
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
