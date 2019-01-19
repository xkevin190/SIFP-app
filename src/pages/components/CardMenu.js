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
            <Container  style={styles.menuContainer}>
              {array.map(inconData =>{
                  return <Image key={inconData.name} source={inconData.url}
                  style={styles.MenuIcon}/>
              })               
             }
            </Container>    
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