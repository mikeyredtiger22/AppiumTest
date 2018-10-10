import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-navigation';

type Props = {
  navigator: Navigator
};
export default class TestPage extends Component<Props> {
  constructor() {
    super();

    this.state = {
      counter: 0,
      timer: 0,
    };
    this.createInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createInterval() {
    this.interval = setInterval(() => (
      this.setState(prevState => ({ timer: prevState.timer + 1 }))), 100);
  }

  handlePlayPauseTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.createInterval();
    }
  }

  handleIncrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  popScreen() {
    this.props.navigator.pop({ animated: true, animationType: 'fade' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Timer:{this.state.timer}
        </Text>
        <Button title="play/pause timer" onPress={() => this.handlePlayPauseTimer()} />
        <Text accessibilityLabel="counter">Counter:{this.state.counter}</Text>
        <Button
          title="  +  "
          onPress={() => this.handleIncrementCounter()}
          accessibilityLabel="counterInc"
        />
        <Button
          title="Pop Screen"
          onPress={() => this.popScreen()}
          style={styles.bottomPad}
          accessibilityLabel="TestPage.PopNav"
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
  bottomPad: {
    marginBottom: 10,
  },
});
