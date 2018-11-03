/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Name       │ Deployment Key                                                   │
 ├────────────┼──────────────────────────────────────────────────────────────────┤
 │ Production │ 0MnSOx6V2BYDzb2kulJcD_6k-enc41a944ed-77ca-4781-bcac-bfdc3c0a603b │
 ├────────────┼──────────────────────────────────────────────────────────────────┤
 │ Staging    │ P8fzrFYbNAjbXIJjb5tRtz471EQf41a944ed-77ca-4781-bcac-bfdc3c0a603b
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import codePush from 'react-native-code-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
 class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
App = codePush(App);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
