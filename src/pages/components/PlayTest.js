import React, { Component } from 'react';
import Antropometricas from './Antropometricas'
import Fuerza from './Fuerza'
import Equilibrio from './Equilibrio'
import RsMuscular from './RsMuscular'
import FlexArticular from './FlexArticular'

import {View} from 'react-native'


export default class PlayTest extends Component {
  
  render() {
    const valueInput = this.state
    return (
      <View style={{flex:1, padding:20}} >  
        {this.props.selected === 'medidas_antropometricas' && <Antropometricas {...this.props}/>}
        {this.props.selected === 'flexibilidad_articular' && <FlexArticular {...this.props}/>} 
        {this.props.selected === 'test_fuerza' && <Fuerza {...this.props}/>}
        {this.props.selected === 'test_equilibrio' && <Equilibrio {...this.props}/>}
        {this.props.selected === 'resitencia_muscular' &&  <RsMuscular {...this.props}/>}
      </View>
    );
  }
}
