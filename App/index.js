import React from 'react'
import { Login } from './screens'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

const App = () => {
  return (<Login/>)
}

export default App