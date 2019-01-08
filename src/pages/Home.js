/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { Header,Left, Button,Icon, Body,Title,Right } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen'
import {
  Router,
  Scene
} from 'react-native-router-flux'

export default class Home extends Component {
    constructor(props) {
        super(props);
      }
    render() {
      
    return ( 
      <Router>
        <Scene key='root'>
            <Scene key='login' component={LoginScreen} title='Login' />
            <Scene key='home' component={HomeScreen} title='Home' />
        </Scene>
      </Router>
    );
  }
}
