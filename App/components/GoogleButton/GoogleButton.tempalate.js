import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  socialBtn: {
    margin: 5,
  }
});

const GooleButtonTemplate = ({ login }) => {
  return (
      <Button
        style = {styles.socialBtn}
        color="red"
        mode="contained" 
        raised 
        onPress={login} 
        icon="google">
        Login with Google
      </Button>
  );
};

export default React.memo(GooleButtonTemplate);
