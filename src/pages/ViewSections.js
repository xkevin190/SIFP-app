import React, { Component } from 'react';
import {View, Text , StyleSheet } from 'react-native';


export default class ViewSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('hello',this.props)
    return (
      <View 
        style={{
          backgroundColor:'#ffff',
           height: '30%',

        }}
      >
        <Text
          style={{
            padding:20,
            fontSize:18
          }}
        > Grupo de Trabajo xxxx </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

})