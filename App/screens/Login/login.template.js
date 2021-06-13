import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FBButton, GoogleButton } from '../../components'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
      },
})
const LoginTemplate = () => {
    return (
    <View style={styles.container}>
        <FBButton/>
        <GoogleButton/>
    </View>)
}

export default LoginTemplate