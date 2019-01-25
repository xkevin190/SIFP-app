import React, { Component } from 'react';
import { View } from 'react-native';
import {Text , Input, Item , Label ,Button} from 'native-base'

export default class PlayTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  render() {
    const {step} = this.state
    return (
      <View>
        <Text > Pruebas de Medidas Antropometicas  </Text>
        {step === 1 &&
        <Item stackedLabel>
            <Label>Nombre</Label>
            <Input 
             
             />
        </Item>
        }
        {step === 2 &&
        <Item stackedLabel>
            <Label>Apellido</Label>
            <Input 
        
             />
        </Item>
        }
         <Button 
            primary 
            onPress={this.onSubmit}
            ><Text> Save </Text>
          </Button>
      </View>
    );
  }
}
