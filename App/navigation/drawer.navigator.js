import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens'
import {  ContentDrawer } from '../components'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator () {
    return (
        <Drawer.Navigator 
          drawerContent = {(props) => <ContentDrawer {...props}/>}>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
  }