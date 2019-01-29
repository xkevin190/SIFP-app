import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet } from 'react-native';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {title , type , handleSubmit } = this.props
     const color ={
         primary: '#004d40',
         seconday: '#d50000'
     }
    return (
        <TouchableOpacity 
        style={{
          backgroundColor:color['primary'] , 
          padding:10,
          alignItems:'center',
          justifyContent:'center',
          borderRadius: 5,  
          width:90
        }}
        onPress={handleSubmit}
        >
           <Text style={{fontSize:15 , fontWeight:'400' , color:'white' }}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
  
    );
  }
}
