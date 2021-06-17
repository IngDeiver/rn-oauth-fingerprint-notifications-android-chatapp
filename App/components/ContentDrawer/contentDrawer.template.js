import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Divider, Button, Title} from 'react-native-paper';
import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import { generate } from "get-initials"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f6fa'
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  logout: {
    margin: 15,
  },
});

const authSelecetor = () =>
  createSelector(
    state => state.auth,
    auth => auth,
  );

const ContentDrawerTemplate = props => {
  const authSelectorMemorized = React.useMemo(authSelecetor, []);
  const auth = useSelector(authSelectorMemorized);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {auth?.method === 'FINGER_PRINT' ? 
        <Avatar.Text size={100} label={generate(auth?.name)} />:
        <Avatar.Image size={100} source={{ uri: auth?.photo}} />}
        <Title>{auth?.name}</Title>
      </View>
      <Divider />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.logout}>
        <Button
          icon="logout"
          mode="contained"
          color="red"
          onPress={() => props.logout(auth?.method)}>
          Logout
        </Button>
      </View>
    </View>
  );
};
export default ContentDrawerTemplate;
