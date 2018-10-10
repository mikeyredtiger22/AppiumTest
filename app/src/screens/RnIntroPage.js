import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n'
    + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu',
});

type Props = {
  navigator: Navigator
};
export default class RnIntroPage extends Component<Props> {
  navigateToTabPage = () => {
    this.props.navigator.push({
      screen: 'screens.Test',
      title: 'Pushed Screen',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Navigate"
          onPress={this.navigateToTabPage}
          accessibilityLabel="IntroPage.NavTo.TestPage"
        />
      </View>
    );
  }
}

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