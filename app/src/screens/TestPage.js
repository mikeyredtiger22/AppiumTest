import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-navigation';
import { Button } from 'react-native-elements';
import PillButton from '../components/PillButton';

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
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createInterval = () => {
    this.interval = setInterval(() => (
      this.setState(prevState => ({ timer: prevState.timer + 1 }))), 100);
  };

  handlePlayPauseTimer = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.createInterval();
    }
  };

  handleIncrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  popScreen = () => {
    this.props.navigator.pop({ animated: true, animationType: 'fade' });
  };

  openMapsPage = () => {
    this.props.navigator.push({ screen: 'screens.Map' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Timer:{this.state.timer}
        </Text>
        <Button
          title="Play / Pause Timer"
          onPress={this.handlePlayPauseTimer}
        />
        <Text accessibilityLabel="counter">Counter:{this.state.counter}</Text>
        <Button
          title="  +  "
          onPress={this.handleIncrementCounter}
          accessibilityLabel="counterInc"
        />
        <PillButton
          title="Pop Button"
          onPress={this.popScreen}
          accessibilityLabel="TestPagePopNav"
        />
        <PillButton
          title="Open Maps"
          onPress={this.openMapsPage}
          accessibilityLabel="TestPage.NavMaps"
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
});
