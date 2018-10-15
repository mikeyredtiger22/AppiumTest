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
    this.createInterval();
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
        <Button
          title="LOADING BUTTON"
          loadingProps={{ size: 'large', color: 'rgba(111, 202, 186, 1)' }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(92, 99,216, 1)',
            width: 300,
            height: 45,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 50,
          }}
          containerStyle={{ marginTop: 20 }}
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
