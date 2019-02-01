import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Sections from './Sections'
import Login from  './LoginScreen'

export default class DualComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login:true
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <>
          { this.state.login && <Login {...this.props}/>}
          { !this.state.login && <Sections {...this.props}/>}
        </>
    );
  }
}
