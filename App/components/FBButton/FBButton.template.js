import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  socialBtn: {
    margin: 5,
  }
});

const FBButtonTemplate = ({ login, isLogin }) => {
  return (
      <Button
        style = {styles.socialBtn}
        color="blue"
        mode="contained" 
        raised 
        onPress={login} 
        icon="facebook"
        disabled={isLogin}>
        Login with Facebook
      </Button>
  );
};

export default React.memo(FBButtonTemplate);
