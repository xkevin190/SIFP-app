import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { Form, Item, Input, Label ,Button ,Radio, Content } from 'native-base';



export default class RegisterIntegrante extends Component {   
    state={
        name:'',
        caracteristicas:''
    }

    onSubmit = (event) => { 
        const obj={
           name: this.state.name,
           caracteristicas:this.state.caracteristicas
        }
        this.props.register( obj )
        this.props.close()
    }

    render(){
        return(
            <View style={{backgroundColor:'black'}} >
                <Modal
                  
                    animationType="fade"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                <View style={{padding:20 }}>
                    <Text style={{ padding:20,fontSize:24, textAlign:'center'}}
                    >Registro de Personas </Text>
                    <Text
                        style={{
                        paddingHorizontal:20,
                        fontSize:14,
                        paddingBottom: 20,
                        }}
                    > porfavor Ingrese los Datos de la Persona a registrar recuerde verifique que esten correctos </Text>
                    <Form>
                    <View style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                            }}>    
                            <Item stackedLabel style={{width:'45%'}}>
                                <Label>Nombre</Label>
                                <Input />
                            </Item>

                            <Item stackedLabel style={{width:'45%'}}>
                                <Label>Apellido</Label>
                                <Input />
                            </Item>   
                        </View>
                        <View style={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                        }}>    
                            <Item stackedLabel style={{width:'40%'}}>
                                <Label> Edad</Label>
                                <Input />
                            </Item>

                            <Item stackedLabel style={{width:'40%'}}>
                                <Label> Peso</Label>
                                <Input />
                            </Item>   
                        </View>

                            <View style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-between',
                            }}>    
                            <Item stackedLabel style={{width:'40%'}}>
                                <Label> Estatura</Label>
                                <Input />
                            </Item>

                            <Item stackedLabel style={{width:'40%'}}>
                                <Label> Peso</Label>
                                <Input />
                            </Item>   
                        </View>

                    </Form>
                </View>
                </Modal>
            </View>
        );
    }
}    

const styles = StyleSheet.create({
    radioButos:{
        
        paddingRight: 10,
    }
})
