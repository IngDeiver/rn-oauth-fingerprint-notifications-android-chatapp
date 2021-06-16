import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {FBButton, GoogleButton, FingerPrint} from '../../components';
import {Provider} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

const LoginTemplate = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <Provider>
        <View style={styles.container}>
          <FBButton/>
          <GoogleButton />
          <FingerPrint />
        </View>
      </Provider>
    </ImageBackground>
  );
};

export default React.memo(LoginTemplate);
