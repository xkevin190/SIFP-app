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
import sections from './Sections'
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
             <Scene key='Login' component={LoginScreen} title='Login'  hideNavBar={true} />}
             <Scene key='home' component={HomeScreen} title='Home' navBar={NavBar} />
            <Scene key='sections' component={sections} title='secciones' navBar={NavBar} />
    
        </Scene>
      </Router>
    );
  }
}
