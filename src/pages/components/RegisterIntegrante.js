import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import {Modal, Text, View,} from 'react-native';
import {Label  ,Radio, Content } from 'native-base';
import { Formik } from 'formik'
import * as yup from 'yup'  
import InputField from '../../components/Input'
import Button from '../../components/Button'
import Toast from '../../components/Toast'

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
    state={
        visible:false,
        message:''
    }   

    componentWillUpdate() {
        if(this.state.visible){
          setTimeout(() => {
            this.setState({visible:false})
          }, 1000);
        }
      }
    

    onSubmit = async (values,{ resetForm}) => { 
        if(this.props.update === null){
            await this.props.register(
                this.props.uidSection,
                values,
                this.props.message,
                (message)=>{
                    this.setState({visible: true , message: message})
                }
            )
        }else{
           
            this.props.updateAction(
                this.props.uidSection, 
                this.props.update.uid,
                values,
            )
            this.props.close()   
        }
        console.log(values)
        resetForm(defaultvalue)
    }

    render(){
        value = this.props.update !==  null? this.props.update : defaultvalue
        return(
            <View  >
                 <Toast visible={this.state.visible} message={this.state.message}/>
                <Modal
                  
                    animationType="fade"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        this.props.close()
                    }}>
                <Formik
                    initialValues={value}
                    onSubmit={this.onSubmit}
                    validationSchema={validationSchema}
                    render = {({values , handleSubmit, setFieldValue, errors, resetForm }) =>{
                        
                     return(
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
                                       title='ATRAS'
                                       type='secondary'
                                       handleSubmit={()=>{this.props.close()}}
                                    />
                                    <Button 
                                       title='REGISTRAR'
                                       type='primary'
                                       handleSubmit={handleSubmit}
                                    />
                                </View>    
                            </View>
                        </Content>
                    )}
                    }
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
