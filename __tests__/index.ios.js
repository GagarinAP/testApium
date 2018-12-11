import {AppRegistry} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {name as appName} from '../app.json';
import App from '../App';

it('renders correctly', () => {
  const App = AppRegistry.registerComponent(appName, () => App);
  renderer.create(<App />).toJSON();
});