import React, {Component} from 'react';
import Home from '../pages/Home';
import {connect} from 'react-redux';
import {logout} from '../actions/actions'

class App extends Component {
  render () {
    return (
      <Home LogoutActions={this.props.logout} data={this.props.state}  />
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  logout:logout
});

export default connect(mapStateToProps,mapDispatchToProps)(App);