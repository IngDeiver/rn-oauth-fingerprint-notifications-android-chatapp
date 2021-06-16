import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  socialBtn: {
    margin: 5,
  }
});

const GooleButtonTemplate = ({ login, isLogin }) => {
  return (
      <Button
        style = {styles.socialBtn}
        color="red"
        mode="contained" 
        raised 
        onPress={login} 
        icon="google"
        disabled={isLogin}>
        Login with Google
      </Button>
  );
};

export default React.memo(GooleButtonTemplate);
