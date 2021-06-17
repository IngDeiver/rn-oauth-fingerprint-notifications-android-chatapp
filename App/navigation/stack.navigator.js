import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createSelector } from '@reduxjs/toolkit';

import { Login, Chat } from '../screens';
import { useSelector } from 'react-redux';
import Drawer from './drawer.navigator';
import { HeaderLeft } from '../components';

const Stack = createStackNavigator();
const authSelecetor = () =>
  createSelector(
    state => state.auth,
    auth => auth,
  );

const StackNavigator = () => {
  const authSelectorMemorized = useMemo(authSelecetor, []);
  const auth = useSelector(authSelectorMemorized);

  return (
    <Stack.Navigator>
      {auth.name ? (
        <>
          <Stack.Screen
            options={{
              headerLeft: () => <HeaderLeft />,
              headerTitleStyle: {
                fontSize: 15,
              }
            }}
            name={`Hello ${auth?.name.split(' ')[0]}`}
            component={Drawer}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={ ({ route }) => ({
              title: route.params.username
            })}
          />

        </>
      ) : (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
