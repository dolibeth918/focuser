/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 1500 };
    this.setCountdown = this.setCountdown.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  setCountdown() {
    const interval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState(previousState => {
          return { timer: previousState.timer - 1 };
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  formatTime() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer % 60;
    if (seconds < 10) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.formatTime()}</Text>
        <Button
          onPress={this.setCountdown}
          title="Start Timer"
          color="#841584"
          accessibilityLabel="start timer"
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
    backgroundColor: '#F5FCFF'
  }
});
