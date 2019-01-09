/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen'
import {
  Router,
  Scene
} from 'react-native-router-flux'
import NavBar from './components/NavBar'

export default class Home extends Component {
    constructor(props) {
        super(props);
      }
    render() {
      
    return ( 
      <Router>
        <Scene key='root'>
            <Scene key='login' component={LoginScreen} title='Login'  navBar={NavBar} />
            <Scene key='home' component={HomeScreen} title='Home' navBar={NavBar} />
            <Scene key='pruebas' component={HomeScreen} title='Pruebas' navBar={NavBar} />
        </Scene>
      </Router>
    );
  }
}
