
import React, {Component} from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
// import {setState} from './src/actions/actions'
import { AppRegistry } from 'react-native';
import { createStackNavigator , createAppContainer } from "react-navigation";
import LoginScreen from './src/pages/LoginScreen'
import HomeScreen from './src/pages/HomeScreen'
import Sections from './src/pages/Sections'
import {setState} from './src/actions/actions'
import navBar from './src/pages/components/NavBar'

console.ignoredYellowBox = ['Setting a timer'];

export default class App extends Component {
  render () {
    store.dispatch(setState());

    return (
      <Provider store={store}>
        <AppContainer  />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login:LoginScreen,
  Home:HomeScreen,
  Sections:Sections
})

const AppContainer = createAppContainer(AppStackNavigator);



AppRegistry.registerComponent('Chat', () => App);