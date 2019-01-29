import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Modal, Text, View,} from 'react-native';
import { Form, Item, Input, Label ,Button ,Radio, Content } from 'native-base';
import { Formik } from 'formik'
import * as yup from 'yup'  
import InputField from '../../components/Input'

const defaultvalue={
    nombre:'',
    apellido:'',
    edad:'',
    peso:'',
    estatura:'',
    cedula:'',
    sexo:'mujer'
}

const validationSchema = yup.object().shape({
    nombre: yup
        .string()
        .required('Este campo es Requerido'),
    apellido: yup
        .string()
        .required('Este campo es requerido'),
    peso: yup
        .number()
        .typeError('Campo debe ser numerico')
        .positive('debe ser positivo')
        .required('Este campo es requerido'),
    estatura: yup
        .number()
        .typeError('Campo debe ser numerico')
        .positive('debe ser positivo')
        .required('Este campo es requerido'),
    cedula: yup
        .number()
        .typeError('Campo debe ser numerico')
        .positive('debe ser positivo')
        .required('Este campo es requerido'),
    edad: yup
        .number()
        .typeError('Campo debe ser numerico')
        .positive('debe ser positivo')
        .required('Este campo es requerido'),

  });

export default class RegisterIntegrante extends Component {   
   

    onSubmit = async (values) => { 

        console.log(values)
     
        await this.props.register(
            this.props.uidSection,
            values,
            this.props.message
        )
        
    
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
                <Formik
                    initialValues={defaultvalue}
                    onSubmit={this.onSubmit}
                    validationSchema={validationSchema}
                    render = {({values , handleSubmit, setFieldValue, errors }) =>(
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
                          
                                    
                                    <View style={styles.inputContent}>    
                                        <InputField label='Nombre'
                                        value={values.nombre}
                                        onChange={setFieldValue}
                                        name='nombre'
                                        error={errors.nombre}
                                        widthContent={'40%'}
                                        />

                                        <InputField label='Apellido'
                                        value={values.apellido}
                                        onChange={setFieldValue}
                                        name='apellido'
                                        error={errors.apellido}
                                        widthContent={'40%'}
                                        />
            
                                  
                                    </View>
                                    <View style={styles.inputContent}>    
                                        <InputField label='Cedula'
                                            value={values.cedula}
                                            onChange={setFieldValue}
                                            keyboardType='numeric'
                                            name='cedula'
                                            error={errors.cedula}
                                            widthContent={'40%'}
                                            />

                                            <InputField label='Edad'
                                            value={values.edad}
                                            onChange={setFieldValue}
                                            name='edad'
                                            error={errors.edad}
                                            keyboardType='numeric'
                                            widthContent={'40%'}
                                            />
                                    </View>
            
                                    <View style={styles.inputContent}>    
                                        <InputField label='Tamaño (CM)'
                                            value={values.estatura}
                                            onChange={setFieldValue}
                                            name='estatura'
                                            error={errors.estatura}
                                            widthContent={'40%'}
                                            keyboardType='numeric'
                                            
                                            />

                                            <InputField label='Peso (KL)'
                                            value={values.peso}
                                            onChange={setFieldValue}
                                            name='peso'
                                            error={errors.peso}
                                            keyboardType='numeric'
                                            widthContent={'40%'}
                                            />
                                    </View>
                                    <View style={{display:'flex', flexDirection:'row' , padding: 20}}>
                                    
                                        <Radio                             
                                            style={{paddingRight:10}}
                                            selectedColor={"#5cb85c"}
                                            onPress={()=>{setFieldValue('sexo', 'hombre')}}
                                            selected={values.sexo !== 'mujer'?true:false}
                                        />
                                        <Label style={{paddingRight:10}}>Hombre</Label>
                                        <Radio
                                            style={{paddingRight:10}}
                                            selectedColor={"#5cb85c"}
                                            onPress={()=>{setFieldValue('sexo', 'mujer')}}
                                            selected={values.sexo === 'mujer'?true:false}
                                        />
                                        <Label>Mujer</Label>
                                    </View>
                                    
                         
                                <View style={styles.footerStyle}>
                                    <Button 
                                    danger
                                    style={styles.buttonStyle} 
                                    onPress={()=>{this.props.close()}} 
                                    ><Text> Atras </Text></Button>
                                    <Button 
                                    primary 
                                    style={styles.buttonStyle} 
                                    onPress={handleSubmit}
                                    ><Text> Registrar </Text></Button>
                                </View>    
                            </View>
                        </Content>
                    )}
                />
              
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
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonStyle:{
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
