import React, { Component } from 'react';
import { Dialog } from 'react-native-simple-dialogs'
import { Form, Item, Input, Label,Text, View ,Button } from 'native-base';


export default class DialogForm extends Component {   
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
            <Dialog
                visible={this.props.modalVisible}
                title="Registrar Grupo de Trabajo"
                titleStyle={{color:'#004d40',
                }}
                animationType='fade'
                onTouchOutside={() => this.props.close()} >
                <View style={{height:300}}>
                <Text style={{paddingBottom:10}}>
                    Porfavor agrega una caracteristica y nombre para crear tu grupo 
                </Text>
                <Form>
                    <Item >
                    <Input 
                        placeholder= 'Nombre'
                        maxLength={30}
                        onChangeText={(text)=>{
                            this.setState({name: text})
                        }}
                    />
                    </Item>
                    <Item >
                    <Input
                    onChangeText={(text)=>{
                        this.setState({caracteristicas: text})
                    }} 
                    placeholder='Caracteristicas del grupo'
                    multiline = {true}
                    numberOfLines = {4}
                    />
                    </Item>
                </Form> 
                <Button
                    onPress={this.onSubmit.bind(this)}
                    disabled
                    style={{
                        position:'absolute',
                        bottom:10,
                        right: 10,
                        backgroundColor:'#004d40'
                    }}
                >
                    <Text >
                        agregar 
                    </Text>
                </Button>
                </View>
            </Dialog>
        );
    }
}    

