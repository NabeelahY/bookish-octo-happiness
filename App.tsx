/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import Amplify, {Auth} from 'aws-amplify';
import awsConfig from './config/aws-exports';

Amplify.configure(awsConfig);

declare const global: {HermesInternal: null | {}};

const App = () => {
  const userSignUp = () => {
    Auth.signUp({
      username: 'user',
      password: 'nab123456#',
      attributes: {
        email: 'noblenab13@gmail.com',
      },
    })
      .then((res) => {
        console.log('signed in', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const confirm = () => {
    Auth.confirmSignUp('user', '835695')
      .then((res) => {
        console.log('signed in', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Hello there</Text>
      <Button title="Sign Up" onPress={userSignUp} />
      <Button title="Confirm" onPress={confirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default App;
