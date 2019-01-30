import React, { Component } from 'react'
import InputField from '../components/Input'
import Button from '../components/Button'
import {View , Text} from 'react-native'
import { Content } from 'native-base'
import {Formik} from 'formik'
import * as yup from 'yup';

const initialValues ={
  email:'hello',
  password:'world'
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('El Email no es valido')
    .required(),
  password: yup
    .string()
    .label('Password')
    .required('La contraseña es requerida'),
});

export default class Equilibrio extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handleSubmit=(values, {resetForm}) =>{
    this.props.navigation.navigate('Sections')
    resetForm(initialValues)
  }
  
  static navigationOptions = {
    header: null,
  };


  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  

 render() {
    return (
        <Formik
          InitialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={validationSchema}
          render = {({values , handleSubmit, setFieldValue, errors }) =>(
           <View style={{ flex:1 ,display:'flex', alignItems:'center' , justifyContent:'center'}}>
                
                <View>
                    <Text style={{fontSize:65, paddingBottom:70 , color:'#004d40'}}>S I P F</Text>
                </View> 
               <View> 
                    <InputField label='Email'
                    value={values.email}
                    onChange={setFieldValue}
                    name='email'
                    error={errors.email}
        
                    />
                    <InputField label ='Password' 
                    value={values.password}
                    onChange={setFieldValue}
                    name='password'
                    error={errors.password}
                    />
                </View>
                <View style={{display:'flex', flexDirection: 'row'}}>
                    
                    <Button 
                    title='REGISTRAR'
                    type='primary'
                    handleSubmit={handleSubmit}
                    />
                    <Button 
                    title='LOGIN'
                    type='primary'
                    handleSubmit={handleSubmit}
                    
                    />
                </View>
           </View> 
          )}
            
      />  
      
    )
  }
}