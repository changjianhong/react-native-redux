/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RootScreen from './src/root/RootScreen';
import { Provider } from 'react-redux';
import store from './src/store';

export default class github extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('github', () => github);
