import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { Dialog } from 'react-native-simple-dialogs'
import { Form, Item, Input, Label,Text, View ,Button } from 'native-base';

export default class DialogForm extends Component {   
    state={
        name:'',
        caracteristicas:''
    }

    onSubmit = (event) => { 
        event.preventDefault()
        this.props.register(
            'hello',
             'world'
           )
        this.props.close()
    }

    render(){
        return(
            <Dialog
                visible={this.props.modalVisible}
                title="Registrar Grupo de Trabajo"
                animationType='fade'
                onTouchOutside={() => this.props.close()} >
                <View style={{height:300}}>
                <Text>
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
                    style={{
                        position:'absolute',
                        bottom:10,
                        right: 10,
                    }}
                >
                    <Text>
                        agregar 
                    </Text>
                </Button>
                </View>
            </Dialog>
        );
    }
}    

