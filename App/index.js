import 'react-native-gesture-handler';

import React from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {Provider} from 'react-redux';
import store from './redux/store';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/stack.navigator';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor } from './redux/store'
import { Text } from 'react-native';

GoogleSignin.configure();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Reidrating...</Text>} persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
