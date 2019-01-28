import React, { Component } from 'react';
import { View , StyleSheet, ScrollView } from 'react-native';
import {Text , Input, Item , Label ,Button , Content, Picker , Container} from 'native-base'
 
const defaultValue ={
  step:1,
  SA:'',
  caderaSA:'',
  AbCaderaSA:'',
  caderasSp:'',
  selected:'Adultos',
}

export default class FlexArticular extends Component {
  constructor(props) {
    super(props);
    this.state = {
     ... defaultValue
    }
  }

  onSubmit(){
    this.props.action(
      this.state , 
      this.props.personalInformation,
      this.props.message,
      this.props.selected
    )
    this.setState(defaultValue)
  }

  onValueChange(value) {
    this.setState({
      selected: value  
    });
  }  

  render() {
    const valueInput = this.state
    return (
      <View style={{flex:1, padding:20}} >  
        <ScrollView>
        {this.state.step === 1 &&

          <View>
            
            <Text style={{paddingBottom:20, textAlign:'center'}}>Test sentarse y alcanzar:</Text> 
            <View style={styles.inputContent}>  
              
              <Item stackedLabel >
                  <Label>Datos Obtenidos</Label>
                  <Input 
                   value={valueInput.SA}
                   onChangeText={(text)=>{this.setState({SA:text })}}
                  />
              </Item>   
            </View>

            <Text style={{paddingBottom:20, textAlign:'center'}}>Test de Flexión de Cadera sin Ayuda</Text> 
            <View style={styles.inputContent}>
              <Item stackedLabel >
                  <Label>Datos Obtenidos</Label>
                  <Input 
                  value={valueInput.caderaSA}
                  onChangeText={(text)=>{this.setState({caderaSA:text})}}
                  />
              </Item>   
            </View>
          </View>
        
        }
        { this.state.step === 2 &&
          <View>
             <Text style={{paddingBottom:20, textAlign:'center'}}>Test de Abducción de Cadera sin Ayuda</Text> 
            <View style={{display:'flex' , flexDirection:'row' }}>
              <Item stackedLabel >
                    <Label>Datos Obtenidos</Label>
                    <Input 
                    value={valueInput.AbCaderaSA}
                    onChangeText={(text)=>{this.setState({AbCaderaSA:text })}}
                    />
              </Item>   
            </View>
            <Text style={{paddingBottom:20,paddingTop:20, textAlign:'center'}}>Test de Flexión de Caderas en Split</Text> 
            <View style={styles.inputContent}>  
              
              <Item stackedLabel >
                  <Label>Datos Obtenidos</Label>
                  <Input 
                   value={valueInput.caderasSp}
                   onChangeText={(text)=>{this.setState({ caderasSp:text })}}
                  />
              </Item>

            </View>
            
          </View>
        }     
          <View style={{display:'flex' , flex:1 , flexDirection:'row-reverse'}}> 
         
            { ( this.state.step === 1  ) && 
              <Button primary                 
                onPress={()=>{this.setState({step:this.state.step + 1 })}}>
                  <Text>Continuar</Text>
              </Button>
            }
            
            { this.state.step === 2 &&
              <Button primary
                onPress={()=>{this.onSubmit()}}
              >
                  <Text>Guardar</Text>
              </Button>
            }
          
            { this.state.step > 1 && 
              <Button  danger style={{marginHorizontal:10}}
                onPress={()=>{this.setState({step: this.state.step -1  })}}
              >
                <Text>Atras</Text>
              </Button>
            }  
              
            
        </View>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyles:{
      width:'40%'
  },
  inputContent:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingBottom:20,
      flexWrap: 'wrap',
  },
  buttonStyle:{
    position:'absolute' ,
     bottom:0 , 
     right:20
  },
  footerStyle:{
      display:'flex' , 
      flexDirection: 'row', 
      justifyContent:'flex-end' ,
      paddingTop:20, 
       minHeight:60   
  },
  selectStyle:{
    width:'50%',
    height:60,
  
    display:'flex',
    marginRight: 20,
    marginTop: 10,
  },
  containerButton:{
    display:'flex',
    flexDirection:'row', 
    position:'absolute', 
    bottom:80, 
    right:20 
  }

 })
