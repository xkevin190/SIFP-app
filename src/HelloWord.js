
import React, {Component} from 'react';
import {initStore} from './store';
import {Provider} from 'react-redux';
import AppContainer from './containers/AppContainer';
import {setState} from './actions/actions'

const store = initStore();

export default class App extends Component {
  render () {
    store.dispatch(setState());
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

