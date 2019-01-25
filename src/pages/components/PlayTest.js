import React, { Component } from 'react';
import { View , StyleSheet} from 'react-native';
import {Text , Input, Item , Label ,Button , Content, Picker} from 'native-base'
 const defaultValue ={
   
 }

export default class PlayTest extends Component {
  constructor(props) {
    super(props);
    
  }

  state={
    step:1,
    cintura:'',
    cadera:'',
    presionSistolica:'',
    presionDistolica:'',
    selected:'Adultos'
  }

  onSubmit(data){
    console.log(DataCue)
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }  

  render() {
     const valueInput = this.state
    return (
      <>  
        {this.state.step === 1 &&
          <View>
            <Text style={{paddingBottom:20, textAlign:'center'}}>Indicie de cintura y cadera</Text> 
            <View style={styles.inputContent}>  
              
              <Item stackedLabel style={styles.inputStyles}>
                  <Label>Cintura</Label>
                  <Input 
                   value={valueInput.cintura}
                   onChangeText={(text)=>{this.setState({cintura:text})}}
                  />
              </Item>

              <Item stackedLabel style={styles.inputStyles}>
                  <Label>Cadera</Label>
                  <Input 
                   value={valueInput.cadera}
                   onChangeText={(text)=>{this.setState({caderas:text})}}
                  />
              </Item>   
            </View>

            <Text style={{paddingBottom:20, textAlign:'center'}}>Tension arterial</Text> 
            <View style={styles.inputContent}>
              <Item stackedLabel style={styles.inputStyles}>
                <Label>Precion distolica</Label>
                <Input 
                   value={valueInput.nombre}
                   onChangeText={(text)=>{this.setState({presionSistolica:text})}}
                />
              </Item>

              <Item stackedLabel style={styles.inputStyles}>
                <Label>Presion sistolica</Label>
                <Input 
                 value={valueInput.apellido}
                 onChangeText={(text)=>{this.setState({presionDistolica:text})}}
                />
              </Item>   
            </View>
          </View>
        }
        { this.state.step === 2 &&
          <View>
             <Text style={{paddingBottom:20, textAlign:'center'}}>Frecuencia Cardiaca</Text> 
            <View style={{display:'flex' , flexDirection:'row' ,}}>
              <View style={styles.selectStyle}>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Frecuencia Cardiaca Adultos" value="Adultos" />
                  <Picker.Item label="Frecuencia Cardiaca Atletas" value="Atletas" />
                </Picker>
              </View>
              <Item stackedLabel style={styles.inputStyles}>
                    <Label>{this.state.selected}</Label>
                    <Input 
                    value={valueInput.cadera}
                    onChangeText={(text)=>{this.setState({caderas:text})}}
                    />
              </Item>   
            </View>
            <Text style={{paddingBottom:20,paddingTop:20, textAlign:'center'}}>Frecuencia Respiratoria</Text> 
            <View style={styles.inputContent}>  
              
              <Item stackedLabel >
                  <Label>Cintura</Label>
                  <Input 
                   value={valueInput.cintura}
                   onChangeText={(text)=>{this.setState({cintura:text})}}
                  />
              </Item>

            </View>

          </View>
        }
       
            <View style={{display:'flex'  , flexDirection:'row', position:'absolute', bottom:80 , right:20 }}> 
            { this.state.step > 1 && 
              <Button  danger style={{marginHorizontal:10}}
                onPress={()=>{this.setState({step: this.state.step -1  })}}
              >
                <Text>Atras</Text>
              </Button>
            }
            { ( this.state.step === 1  || this.state.step === 2  ) && 
              <Button primary                 
                onPress={()=>{this.setState({step:this.state.step + 1 })}}>
                  <Text>Continuar</Text>
              </Button>
            }
              
          { this.state.step === 3 &&
            <Button primary
              onPress={()=>{this.setState({step:1 })}}
            >
                <Text>Guardar</Text>
            </Button>
          }
        </View>

    </>
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
      paddingBottom:40
  },
  buttonStyle:{
     position:'absolute' ,
     bottom:80 , 
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
    borderWidth:0.5, 
    borderColor:'#D9D5DC',
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
