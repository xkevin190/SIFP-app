import React, { Component } from 'react';
import { Dialog } from 'react-native-simple-dialogs'
import { Form, Item, Input, Label,Text, View ,Button } from 'native-base';
import InputField from '../../components/Input'
import {Formik} from 'formik'
import * as yup from 'yup';

const initialValues ={
    name:'hello',
    caracteristicas:'world'
  }
  
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nombre es Requerido'),
    caracteristicas: yup
      .string()
      .required('Caracteristicas es Requerido'),
  });
  

export default class DialogForm extends Component {   
    state={
        name:'',
        caracteristicas:''
    }

    onSubmit = (value) => { 
        const obj={
           name: this.state.name,
           caracteristicas:this.state.caracteristicas
        }
        this.props.register( value )
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
                    <Formik
                        InitialValues={initialValues}
                        onSubmit={this.onSubmit}
                        validationSchema={validationSchema}
                        render = {({values , handleSubmit, setFieldValue, errors }) =>(
                            <>
                                <InputField label='Nombre'
                                value={values.name}
                                onChange={setFieldValue}
                                name='name'
                                error={errors.name}
                                />
                                <InputField label ='Caracteristicas' 
                                value={values.caracteristicas}
                                onChange={setFieldValue}
                                name='caracteristicas'
                                error={errors.caracteristicas}
                                multiline = {true}
                                numberOfLines = {4}
                                />
                                <View style={{flexDirection:'row-reverse'}}>
                                    <Button
                                        onPress={handleSubmit}
                                        style={{
                                            justifyContent:'center',
                                            backgroundColor:'#004d40'
                                            
                                        }}
                                    >
                                        <Text >
                                            agregar 
                                        </Text>
                                    </Button>
                                </View>
                            </> 
                        )}

                            
                    />  
                </Form> 
                
                </View>
            </Dialog>
        );
    }
}    

