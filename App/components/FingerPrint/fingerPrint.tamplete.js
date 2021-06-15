import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  isSensorAvailable,
  realeaseBiometric,
} from '../../services/auth.service';
import { Button, Dialog, Portal, TextInput} from 'react-native-paper';

const styles = StyleSheet.create({
  socialBtn: {
    margin: 5,
  },
});

const FingerPrintTemplate = ({ autthenticate, visible, hideDialog, login }) => {
  const [biometricSensor, setBiometricSensor] = React.useState(null);
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    if (!biometricSensor) {
      isSensorAvailable().then(type => setBiometricSensor(type))
      .catch(err => console.log(err));
    }
    return () => realeaseBiometric();
  }, []);

  if (isSensorAvailable)
    return (
      <View>
        <Button
          style={styles.socialBtn}
          mode="contained"
          raised
          onPress={autthenticate}
          icon="fingerprint">
          Login with fingerprint
        </Button>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <TextInput
              label="Write a username..."
              value={username}
              onChangeText={(text) => setUsername(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={() => login(username)} disabled={username.trim() === ''}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  return null;
};

export default React.memo(FingerPrintTemplate);
