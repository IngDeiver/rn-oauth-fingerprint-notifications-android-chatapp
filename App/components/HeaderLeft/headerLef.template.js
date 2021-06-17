import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { DrawerActions } from '@react-navigation/native';

const HeaderLefTemplate = () => {
  const location = useNavigation()

  const toggleDrawer = () => {
    location.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <TouchableOpacity style={{ marginLeft: 20 }} onPress={toggleDrawer}>
      <Icon size={24} name="bars" />
    </TouchableOpacity>
  );
};

export default HeaderLefTemplate;
