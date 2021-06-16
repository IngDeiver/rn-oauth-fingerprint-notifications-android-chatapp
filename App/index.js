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
import { ActivityIndicator, Colors } from 'react-native-paper';

GoogleSignin.configure();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate 
      loading={ <ActivityIndicator animating={true} style={{ marginTop: 10 }}/>} 
      persistor={persistor}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
