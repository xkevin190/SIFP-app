
import React, {Component} from 'react';
import {initStore} from './store';
import {Provider} from 'react-redux';
import AppContainer from './containers/AppContainer';

const store = initStore();

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

