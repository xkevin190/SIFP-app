
import React, {Component} from 'react';
import store from './src/store';
import {Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import AppContainer from './src'
import {setState, isVerify} from './src/actions/actions'
export default class App extends Component {
  constructor(){
    super()
    console.ignoredYellowBox = [
      'Setting a timer'
  ]
  }
  render () {
    store.dispatch(setState());
    store.dispatch(isVerify());
  
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('Chat', () => App);