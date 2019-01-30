import React, { Component } from 'react';
import { View , StyleSheet, ScrollView } from 'react-native';
import {Text , Input, Item , Label  , Content, Picker , Container} from 'native-base'
import Button  from '../../components/Button'

const defaultValue ={
  step:1,
  cintura:'',
  cadera:'',
  presionSistolica:'',
  presionDistolica:'',
  selected:'Adultos',
  cardiacaData:'',
  respiratoriaData:'',
  triceps:'',
  supraIliaco:'',
  pecho:'',
  abdomen:'',
  muslo:''
}

export default class PlayTest extends Component {
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
    this.props.backToResult()
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
            
            <Text style={{paddingBottom:20, textAlign:'center'}}>Indicie de cintura y cadera</Text> 
            <View style={styles.inputContent}>  
              
              <Item stackedLabel style={styles.inputStyles}>
                  <Label>Cintura</Label>
                  <Input 
                   value={valueInput.cintura}
                   onChangeText={(text)=>{this.setState({cintura:text })}}
                  />
              </Item>

              <Item stackedLabel style={styles.inputStyles}>
                  <Label>Cadera</Label>
                  <Input 
                   value={valueInput.cadera}
                   onChangeText={(text)=>{this.setState({ cadera:text})}}
                  />
              </Item>   
            </View>

            <Text style={{paddingBottom:20, textAlign:'center'}}>Tension arterial</Text> 
            <View style={styles.inputContent}>
              <Item stackedLabel style={styles.inputStyles}>
                  <Label>Presion sistolica</Label>
                  <Input 
                  value={valueInput.presionSistolica}
                  onChangeText={(text)=>{this.setState({presionSistolica:text})}}
                  />
              </Item>   
              
              <Item stackedLabel style={styles.inputStyles}>
                <Label>Precion distolica</Label>
                <Input 
                   value={valueInput.presionDistolica}
                   onChangeText={(text)=>{this.setState({presionDistolica:text })}}
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
                  selectedValue={valueInput.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Frecuencia Cardiaca Adultos" value="Adultos" />
                  <Picker.Item label="Frecuencia Cardiaca Atletas" value="Atletas" />
                </Picker>
              </View>
              <Item stackedLabel style={styles.inputStyles}>
                    <Label>{valueInput.selected}</Label>
                    <Input 
                    value={valueInput.cardiacaData}
                    onChangeText={(text)=>{this.setState({cardiacaData:text })}}
                    />
              </Item>   
            </View>
            <Text style={{paddingBottom:20,paddingTop:20, textAlign:'center'}}>Frecuencia Respiratoria</Text> 
            <View style={styles.inputContent}>  
              
              <Item stackedLabel >
                  <Label>Ingrese Frecuencia Respiratoria</Label>
                  <Input 
                   value={valueInput.respiratoriaData}
                   onChangeText={(text)=>{this.setState({ respiratoriaData:text })}}
                  />
              </Item>

            </View>
            
          </View>
        }
          {/* { (this.state.step === 3 &&  this.props.personalInformation.sexo === 'mujer' ) &&
            <View>
              <Text style={{paddingBottom:20, textAlign:'center'}}>Composición Corporal</Text> 
              <View style={styles.inputContent}>  
                
                <Item stackedLabel style={styles.inputStyles}>
                    <Label>triceps</Label>
                    <Input 
                    value={valueInput.triceps}
                    onChangeText={(text)=>{this.setState({triceps:text })}}
                    />
                </Item>

                <Item stackedLabel style={styles.inputStyles}>
                    <Label>Supra Iliaco</Label>
                    <Input 
                    value={valueInput.supraIliaco}
                    onChangeText={(text)=>{this.setState({supraIliaco:text})}}
                    />
                </Item>   
              </View>
              <View style={styles.inputContent}>     
                <Item stackedLabel style={styles.inputStyles}>
                    <Label>Muslo</Label>
                    <Input 
                    value={valueInput.muslo}
                    onChangeText={(text)=>{this.setState({muslo:text})}}
                    />
                </Item>   
              </View>
            </View>
          }

          {(this.state.step === 3 && this.props.personalInformation.sexo === 'hombre')&&
            <View>
              <Text style={{paddingBottom:20, textAlign:'center'}}>Composición Corporal</Text> 
              <View style={styles.inputContent}>  
                
                <Item stackedLabel style={styles.inputStyles}>
                    <Label>Pecho</Label>
                    <Input 
                    value={valueInput.pecho}
                    onChangeText={(text)=>{this.setState({ pecho:text })}}
                    />
                </Item>

                <Item stackedLabel style={styles.inputStyles}>
                    <Label>Abdomen</Label>
                    <Input 
                    value={valueInput.abdomen}
                    onChangeText={(text)=>{this.setState({ abdomen :text })}}
                    />
                </Item>   
              </View>
              <View style={styles.inputContent}>     
                <Item stackedLabel style={styles.inputStyles}>
                    <Label>Muslo</Label>
                    <Input 
                    value={valueInput.muslo}
                    onChangeText={(text)=>{this.setState({muslo:text })}}
                    />
                </Item>   
              </View>
            </View>
          } */}
       
          <View style={{display:'flex' , flex:1 , flexDirection:'row-reverse'}}> 
         
            { ( this.state.step === 1  ) && 
                <Button 
                  title='CONTINUAR'
                  type='primary'
                  handleSubmit={()=>{this.setState({step:this.state.step + 1 })}}
              />
            }
            
            { this.state.step === 2 &&
              <Button 
                title='GUARDAR'
                type='primary'
                handleSubmit={()=>{this.onSubmit()}}
              />
            }
          
            { this.state.step > 1 && 
      
              <Button 
                title='ATRAS'
                type='secondary'
                handleSubmit={()=>{this.setState({step: this.state.step -1  })}}
              />
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
