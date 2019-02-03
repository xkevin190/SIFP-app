import React, { Component } from 'react'
import InputField from '../components/Input'
import Button from '../components/Button'
import {View , Text , ScrollView} from 'react-native'
import {Formik} from 'formik'
import * as yup from 'yup';
import {setData} from '../firebase/index'
import  Toast  from '../components/Toast';


const initialValues ={
  email:'',
  password:''
}

const auth = new setData()



export default class Equilibrio extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      view:'login'
     }
  }
  handleSubmit= async(values, {resetForm}) =>{
    this.state.view === 'login'?
    await this.props.login(values , this.props.navigation,
      (message)=>{
        this.setState({visible:true, message:message })
      }
      
    ):
    await this.props.register(values , 
      (message)=>{
        this.setState({visible:true, message:message ,view:'login' })
      }   
    )
    
    resetForm(initialValues)
  }
  
  static navigationOptions = {
    header: null,
  };


 render() {
    let validationSchema 
      if(this.state.view === 'register'){
       validationSchema = yup.object().shape({
      email: yup
        .string()
        .email('El Email no es valido')
        .required(),
      password: yup
        .string()
        .label('Password')
        .required('La contraseña es requerida'),
        passwordConfirm:yup.string()
        .oneOf([yup.ref('password'), null], 'La contraseña no coincide ' )
        .required('confirmacion de contraseña es requerida')
      });
    
    }else{
       validationSchema = yup.object().shape({
        email: yup
          .string()
          .email('El Email no es valido')
          .required(),
        password: yup
          .string()
          .label('Password')
          .required('La contraseña es requerida'),
        
      });
    }  
   
    return (
        <>
        <Toast visible={this.state.visible} message={this.state.message}/>
        <Formik
          InitialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={validationSchema}
          render = {({values , handleSubmit, setFieldValue, errors }) =>(
              <ScrollView
                contentContainerStyle={{
                  flexGrow:1 , alignItems:'center',paddingBottom:40
                }}
              >  
                <View>
                    <Text style={{fontSize:65, paddingBottom:40, paddingTop:15 , color:'#004d40'}}>S I P F</Text>
                </View> 
               <View style={{width:'90%'}} > 
                    <InputField label='Correo'
                    value={values.email}
                    onChange={setFieldValue}
                    name='email'
                    keyboardType='email-address'
                    error={errors.email}
    
        
                    />
                    <InputField label ='Contraseña' 
                    value={values.password}
                    onChange={setFieldValue}
                    name='password'
                    error={errors.password}
                    secureTextEntry

                    />
                    { this.state.view === 'register' &&
                      <InputField label ='Confirmar contraseña' 
                      value={values.passwordConfirm}
                      onChange={setFieldValue}
                      name='passwordConfirm'
                      error={errors.passwordConfirm}
                      secureTextEntry
                      />
                    }
                </View>
                { this.state.view === 'register' &&
                <View style={{display:'flex', flexDirection: 'row'}}>
            
                    <Button 
                    title='ATRAS'
                    type='secondary'
                    handleSubmit={()=>{this.setState({view:'login'})}}
                    />

                    <Button 
                    title='GUARDAR'
                    type='primary'
                    handleSubmit={handleSubmit}    
                    />
                </View>
                }
                  
                { this.state.view === 'login' &&
                <View style={{display:'flex', flexDirection: 'row'}}>
            
                    <Button 
                    title='REGISTRAR'
                    type='primary'
                    handleSubmit={()=>{this.setState({view:'register'})}}
                    />

                    <Button 
                    title='LOGIN'
                    type='primary'
                    handleSubmit={handleSubmit}    
                    />
                </View>
                }
              </ScrollView>
    
          )}
            
      />  
      </>
    )
  }
}


