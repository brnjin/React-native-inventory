import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Todo from './src/container/Todo';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
