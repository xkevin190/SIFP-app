import React, { Component } from 'react';
import { View, Text , Button} from 'react-native';
import Sections from './Sections'
import Login from  './LoginScreen'
import  {setData} from '../firebase/index'
import {connect} from 'react-redux'

const auth = new setData()

 class DualComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        login:false
    };
  }



    componentWillReceiveProps(nextProps){
        this.forceUpdate()
    }



  static navigationOptions = {
    header: null,
  };
  
  
  render() {
    let user = this.props.user.toJS()
    const rule1 = user.logeado === undefined? false: true
    const rule2 = user.logeado === true? true: false
    console.log(rule1 && rule2 )
    return (
        <>
          { (rule1 && !rule2 )&& <Login {...this.props}/>}
          { (rule1 &&  rule2 ) && <Sections {...this.props}/>}

        </>
    );
  }
}

const  mapStateToProps = (state)=> ({
  user: state.init.get('user')
})

export default connect(mapStateToProps) (DualComponent)