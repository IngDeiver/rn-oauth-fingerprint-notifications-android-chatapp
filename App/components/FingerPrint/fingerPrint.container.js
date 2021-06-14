import React from 'react';
import FingerPrintTemplate  from './fingerPrint.tamplete'
import {
  BiometricLogin,
} from '../../services/auth.service';


const FingerPrintContainer = () => {
  const [visible, setVisible] = React.useState(false)
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const autthenticate = () => {
    BiometricLogin()
      .then(res => {
        showDialog()
      })
      .catch(err => console.log(err));
  };

  return (
   <FingerPrintTemplate autthenticate={autthenticate} 
   hideDialog={hideDialog} 
   visible={visible}/>
  );
};

export default FingerPrintContainer
