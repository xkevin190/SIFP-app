import React, { Component } from 'react';
import {View, StyleSheet , Image} from 'react-native';
import { Text, Container } from 'native-base';
import {connect} from 'react-redux'
import TestValidator from '../utils/Validator'

const coretest = new TestValidator()
class Alumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }


  render() {
    const params = this.props.navigation.state.params.data
    coretest.antropometicasResult()
    return (
      <>
        <View 
          style={{
            backgroundColor:'dark-gray',
            minHeight: '24%',
            borderRadius:2,
            borderBottomWidth:1,
            borderColor:'#dbead8',
          }}
        >
            <Text style={{ padding:15,fontSize:24}}
            > {params.nombre} {params.apellido}</Text>
            <View style={{display:'flex', 
              flexDirection: 'row',
              justifyContent:'space-between'
              
              }}
            > 
              <View style={{width:'50%'}}>
                <Text
                  style={styles.ViewSeparation}
                > Cedula: {params.cedula} 
                </Text>
                <Text
                  style={styles.ViewSeparation}
                  > Edad: {params.edad}
                </Text>
                <Text
                  style={styles.ViewSeparation}
                  > Sexo: {params.sexo} 
                </Text>
              </View>
              
              <View style={{width:'50%', borderLeftWidth:0.5 , borderColor:'#dbead8', paddingHorizontal:10, display:'flex',}}>
                <Text
                    style={styles.ViewSeparation}
                  > Estatura: {params.estatura} CM 
                </Text>
                <Text
                    style={styles.ViewSeparation}
                  > Peso: {params.peso} kilos
                </Text>
              
              </View>    
            </View>
            
          </View>
          <Container style={{padding:20}}>
             <Text style={{fontSize:24, textAlign:'center', paddingBottom:15}}>Resultados Obtenidos </Text>
             <View style={{display:'flex' ,  flexDirection:'row', alignItems: 'center',  borderBottomWidth:1,
              borderColor:'#dbead8', }}> 
             
                <Image source={require('../utils/img/ic_antropometricas.jpg')}
                  style={{  width:'40%',
                  height:150,
                  marginBottom:10
                  
                }}
                />
                <Text style={{width:'50%', paddingLeft:10}}>Estas pruebas son las Iniciales calculadas al momento del Registro </Text>
              </View>
              <View>
                <Text style={{padding:20}}>Índice de Masa Corporal (IMC): {params.medidas_antropometricas.IMC}</Text>
              </View>
              

          </Container> 
          
      </>

     
    );
  }
}

const mapStateToProps = (data) => ({
  jobsGrup: data.init.get('groupData'),
});

export default connect(mapStateToProps)(Alumno)

const styles = StyleSheet.create({
  ViewSeparation:{
    paddingBottom:10,
    fontSize:14,
    paddingHorizontal:20
  }
})