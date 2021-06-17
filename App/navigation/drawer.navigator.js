import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../screens';
import {ContentDrawer} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <ContentDrawer {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: '#6c5ce7',
        activeTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Chats',
          drawerIcon: ({ color, size }) => (
            <Icon name="wechat" size={size} color={color}/>
          ),
        }}
        component={Home}
      />
    </Drawer.Navigator>
  );
}
