import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class FloatButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.showModal)
    return (
         <TouchableOpacity onPress={()=>{this.props.showModal()}}
            style={styles.floatButton}> 
            <Text style={styles.textButton}> +</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    floatButton: {
        width:50,
        height:50,   
        position: 'absolute',
        backgroundColor: 'blue',
        right:20,
        bottom:20,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        shadowOffset:{  width: 50,  height: 20,  },
        shadowColor: 'black',
        shadowOpacity: 0.4,
    },

    textButton:{
        fontSize:20,
        color:'white',
        marginRight: 6,
    }
    
  });