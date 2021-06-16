import React,  { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  socialBtn: {
    margin: 5,
  }
});

const authSelecetor = () => createSelector(state => state.auth, auth => auth)

const GooleButtonTemplate = ({ login }) => {
  const authSelectorMemorized = useMemo(authSelecetor, [])
  const auth = useSelector(authSelectorMemorized)

  return (
      <Button
        style = {styles.socialBtn}
        color="red"
        mode="contained" 
        raised 
        onPress={login} 
        icon="google"
        disabled={auth?.state !== ''}>
        Login with Google
      </Button>
  );
};

export default React.memo(GooleButtonTemplate);
