import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Modal, Text, View,} from 'react-native';
import { Form, Item, Input, Label ,Button ,Radio, Content } from 'native-base';

const defaultvalue={
    nombre:'',
    apellido:'',
    edad:'',
    peso:'',
    estatura:'',
    cedula:'',
    sexo:''
}

export default class RegisterIntegrante extends Component {   
    state={
        nombre:'',
        apellido:'',
        edad:'',
        peso:'',
        estatura:'',
        cedula:'',
        sexo:'hombre'
    }

    onSubmit = (event) => { 
        const obj={
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            edad:this.state.edad,
            peso:this.state.peso,
            estatura:this.state.estatura,
            cedula:this.state.cedula,
            sexo:this.state.sexo
        }
        console.log(obj)
        this.setState(defaultvalue)
        // this.props.register( obj )
        // this.props.close()


    }

    render(){
        const valueInput = this.state
        return(
            <View  >
                <Modal
                  
                    animationType="fade"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        this.props.close()
                    }}>
               < Content>
                <View style={{padding:20 }}>
                    
                    <Text style={{ padding:20,fontSize:24, textAlign:'center'}}
                    >Registro de Personas </Text>
                    <Text
                        style={{
                        paddingHorizontal:20,
                        fontSize:14,
                        paddingBottom: 20,
                        }}
                    >
                        Porfavor ingrese los datos personales de la persona cuidadozamente, 
                        ya que influyen mucho en el resultado de las pruebas 
                    </Text>
                    <Form>
                        
                    <View style={styles.inputContent}>    
                            <Item stackedLabel style={styles.inputStyles}>
                                <Label>Nombre</Label>
                                <Input 
                                  value={valueInput.nombre}
                                  onChangeText={(text)=>{this.setState({nombre:text})}} />
                            </Item>

                            <Item stackedLabel style={styles.inputStyles}>
                                <Label>Apellido</Label>
                                <Input 
                                 value={valueInput.apellido}
                                onChangeText={(text)=>{this.setState({apellido:text})}}/>
                            </Item>   
                        </View>
                        <View style={styles.inputContent}>    
                            <Item stackedLabel style={styles.inputStyles}>
                                <Label> Cedula</Label>
                                <Input 
                                 value={valueInput.cedula}
                                onChangeText={(text)=>{this.setState({cedula:text})}}/>
                            </Item>

                            <Item stackedLabel style={styles.inputStyles}>
                                <Label> Edad</Label>
                                <Input 
                                 value={valueInput.edad}
                                onChangeText={(text)=>{this.setState({edad:text})}} />
                            </Item>   
                        </View>

                            <View style={styles.inputContent}>    
                            <Item stackedLabel style={styles.inputStyles}>
                                <Label> Estatura</Label>
                                <Input  
                                 value={valueInput.estatura}
                                onChangeText={(text)=>{this.setState({estatura:text})}} />
                            </Item>

                            <Item stackedLabel style={styles.inputStyles}>
                                <Label> Peso</Label>
                                <Input   
                                 value={valueInput.peso}
                                onChangeText={(text)=>{this.setState({peso:text})}}/>
                            </Item>   
                        </View>
                        <View style={{display:'flex', flexDirection:'row' , padding: 20}}>
                           
                            <Radio
                                style={{paddingRight:10}}
                                selectedColor={"#5cb85c"}
                                onPress={()=>{this.setState({sexo:'hombre'})}}
                                selected={valueInput.sexo !== 'mujer'?true:false}
                            />
                             <Label style={{paddingRight:10}}>Hombre</Label>
                            <Radio
                                style={{paddingRight:10}}
                                selectedColor={"#5cb85c"}
                                onPress={()=>{this.setState({sexo:'mujer'})}}
                                selected={valueInput.sexo === 'mujer'?true:false}
                            />
                             <Label>Mujer</Label>
                        </View>
                        
                    </Form>
                    <View style={styles.footerStyle}>
                        <Button 
                         danger
                         style={styles.buttonStyle} 
                         onPress={()=>{this.props.close()}} 
                         ><Text> Atras </Text></Button>
                        <Button 
                        primary 
                        style={styles.buttonStyle} 
                        onPress={this.onSubmit}
                        ><Text> Registrar </Text></Button>
                    </View>    
                </View>
                </Content>
                </Modal>
            </View>
        );
    }
}    

const styles = StyleSheet.create({
    radioButos:{
      paddingRight: 10,
    },
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
        width: 75,
        display:'flex',
        justifyContent:'center',
        marginHorizontal: 5,

    },
    footerStyle:{
        display:'flex' , 
        flexDirection: 'row', 
        justifyContent:'flex-end' ,
        paddingTop:20, 
         minHeight:60   
    }

})
