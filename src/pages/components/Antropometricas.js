import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text,  Content , Container } from 'native-base';

export default class Antropometricas extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Container style={{padding:20}}>
        <Content>
            <Text style={{fontSize:24, textAlign:'center', paddingBottom:15}}>Resultados Obtenidos </Text>
            <View style={{display:'flex' ,  flexDirection:'row', alignItems: 'center',  borderBottomWidth:1,
              borderColor:'#dbead8', }}> 
            
              <Image source={this.props.logo.url}
                style={{  width:'25%',
                height:100,
                marginBottom:10
                
              }}/>
              <Text style={{width:'75%', paddingLeft:10 , paddingBottom:25}}>Estas pruebas son las Iniciales calculadas al momento del Registro </Text>
            </View >
            { (this.props.data.length > 0) &&
              this.props.data.map( (result ) =>{
                return (  
                  <View key={result.key} style={{borderBottomWidth:1,borderColor:'#dbead8',}} >
                    <View style={{
                      display:'flex',
                      flexDirection:'row',
                      paddingTop:10
                    }}>
                      <Text style={{paddingRight:10 , fontWeight:'bold'}}>{result.title}:</Text>
                      <Text style={{paddingRight:20}}>{result.data}</Text>
                    </View>
                    <View style={{
                      display:'flex',
                      flexDirection:'row',
                      paddingTop:10
                    }}>
                      <Text style={{paddingRight:10, fontWeight:'bold'}}>Resultado:</Text>
                      <Text style={{paddingRight:20}}>{result.resultado}</Text>
                    </View>
                    <Text style={{
                      display:'flex',
                      flexDirection:'row',
                      paddingTop:10,
                      flexWrap:'wrap',
                      marginBottom:15
                    
                    }}>
                      <Text style={{ fontWeight:'bold'}}>Recomendacion:  </Text>
                      <Text>{result.recomendacion}</Text>
                    </Text>
                  </View>
                )
            })}
        </Content>
      </Container>
    );
  }
}
