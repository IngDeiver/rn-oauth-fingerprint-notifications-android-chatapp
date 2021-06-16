import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createSelector } from '@reduxjs/toolkit'

import {  Login } from '../screens';
import { useSelector } from 'react-redux';
import Home from './drawer.navigator'

const Stack = createStackNavigator();
const authSelecetor = () => createSelector(state => state.auth, auth => auth)

const StackNavigator = () => {
  const authSelectorMemorized = useMemo(authSelecetor, [])
  const auth = useSelector(authSelectorMemorized)

  return (
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
          {
            auth.name ? 
            <Stack.Screen name="Home" component={Home} /> 
            : 
            <Stack.Screen name="Login" component={Login} />
          }
      </Stack.Navigator>
  );
};

export default StackNavigator
