import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux'
import RouteContainer from './routes'
import Spinner from './components/Spinner'
 
class AppContainer extends Component {
   constructor(props) {
     super(props);
     this.state = {
     };
   }
 
   render() {
     console.log('global index', this.props)
     return (
       <>
         {this.props.loading && <Spinner/> }
         <RouteContainer/>
       </>
     );
   }
 }

 const mapStateToProps =(state) =>({
  loading: state.user.get('loading')
})

 export default connect(mapStateToProps)(AppContainer)