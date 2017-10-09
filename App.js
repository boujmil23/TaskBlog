/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import App1 from './src/App';


export default class App extends Component<{}> {
  componentDidMount() {
         SplashScreen.hide();
     }
  render() {
    return (
         <App1 />
    );
  }
}
