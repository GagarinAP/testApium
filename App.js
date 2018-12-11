import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginVertical: 50
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
  input: {
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    padding: 10
  }
});

class App extends React.Component {
  state = {
    counter: 0,
    text: '',
  };

  onPress = () => this.setState({ counter: this.state.counter + 1 });

  onChangeText = text => this.setState({ text });

  render() {
    return (
      <View style={styles.container} accessibilityLabel="testview">
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text accessibilityLabel="counter">{this.state.counter}</Text>
        <Button onPress={this.onPress} title="Press me" accessibilityLabel="button" />
        <Text accessibilityLabel="text">{this.state.text}</Text>
        <TextInput
          accessibilityLabel="textinput"
          style={styles.input}
          onChangeText={this.onChangeText}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default App;