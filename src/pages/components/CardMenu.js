import React, { Component } from 'react';
import { Container, Icon, Picker } from 'native-base';
import {StyleSheet , View, Image} from "react-native";


export default class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const array=[
      {name:'ic_fuerza', url:require('../../utils/img/ic_fuerza.jpg')},
      {name:'ic_antropometricas'  , url:require('../../utils/img/ic_antropometricas.jpg')},
      {name:'ic_cardiovascular'  , url:require('../../utils/img/ic_cardiovascular.jpg')},
      {name:'ic_equilibrio'  , url:require('../../utils/img/ic_equilibrio.jpg')},
      {name:'ic_flexibilidad'  , url:require( '../../utils/img/ic_flexibilidad.jpg')},
      {name:'ic_velocidad'  , url:require('../../utils/img/ic_velocidad.jpg')},
    ]
    return (
            // <Container  style={styles.menuContainer}>
            //   {array.map(inconData =>{
            //       console.log(inconData)
            //       return <Image key={inconData.name} source={inconData.url}
            //       style={styles.MenuIcon}/>
            //   })               
            //  }
            // </Container>
              <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
      );
  }
}


const styles = StyleSheet.create({
    menuContainer: {
      display:'flex', 
      flexWrap: 'wrap', 
      flexDirection:'row',
      
    },
    MenuIcon:{
      width:'40%',
      height:150,
      margin: 20
      
    }
  });