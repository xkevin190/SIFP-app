import React, { Component } from 'react';
import {View, StyleSheet , Image} from 'react-native';
import { Text, Container, Content, Footer, FooterTab, Button, Icon, Picker } from 'native-base';
import {connect} from 'react-redux'
import {TestResultFilter} from '../utils/Validator'
import {getPruebas} from '../actions/actions'
import ViewResult from './components/ViewResult'
import PlayTest from './components/PlayTest'

class Alumno extends Component {
  constructor(props) {
    console.ignoredYellowBox = ['Setting a timer'];
    super(props);
    this.state = {
      selected: "medidas_antropometricas",
      tabSelected:"result"
    };
  }
  componentDidMount(){
    const params = this.props.navigation.state.params.data
    this.props.getData(params.uid)
    
  }

  onValueChange(value) {
    this.setState({
      selected: value
      
    });
  }



  render() {
    const params = this.props.navigation.state.params.data
    const data = TestResultFilter(this.props.DataPruebas, this.state.selected)
    console.log(data)
    return (
      <>
        <View 
          style={{
            minHeight: '24%',
            borderRadius:2,
            borderBottomWidth:1,
            borderColor:'#dbead8',
          }}
        >  
          <Text style={{ padding:15,fontSize:24}}> {params.nombre} {params.apellido}</Text>
          <Picker
            note
            mode="dropdown"
            style={{ position:'absolute', width: '50%' , top:10, right:20 }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Medidas Antropometricas" value="medidas_antropometricas" />
            <Picker.Item label="Flexibilidad  Articular." value="key1" />
            <Picker.Item label="Test de Resitencia Muscular" value="key2" />
            <Picker.Item label="Test de Fuerza" value="key3" />
            <Picker.Item label="Test de Equilibrio" value="key4" />
            <Picker.Item label="Todos los Resultados" value="key5" />
          </Picker>
          <View style={{display:'flex',  flexDirection: 'row', justifyContent:'space-between' }}> 
            <View style={{width:'50%'}}>
              <Text style={styles.ViewSeparation}> Cedula: {params.cedula} </Text>
              <Text style={styles.ViewSeparation}> Edad: {params.edad}</Text>
              <Text style={styles.ViewSeparation}> Sexo: {params.sexo}</Text>
            </View>
            <View style={{width:'50%', borderLeftWidth:0.5 , borderColor:'#dbead8', paddingHorizontal:10, display:'flex',}}>
              <Text style={styles.ViewSeparation}> Estatura: {params.estatura} CM </Text>
              <Text style={styles.ViewSeparation}> Peso: {params.peso} kilos</Text>
            </View>    
          </View>
        
        </View>
          <Container style={{padding:20}}>
          
            {this.state.tabSelected === 'play' && <PlayTest />}
            {this.state.tabSelected === 'result' && <ViewResult data={data}/>}
        
          </Container>
          <Footer style={{position:'absolute' ,bottom:0}}>
            <FooterTab  style={{backgroundColor:'#eceff1'}}>
              <Button onPress={()=>this.setState({tabSelected:'play'})}>
                <Icon  style={{color:this.state.tabSelected === 'play'? 'black':'gray' }} name="play" />
              </Button>
             
              <Button onPress={()=>this.setState({tabSelected:'result'})}>
                <Icon  style={{color:this.state.tabSelected === 'result'? 'black':'gray' }} type='MaterialIcons'  name="assignment" />
              </Button>
            </FooterTab>
        </Footer>
          
      </>

     
    );
  }
}

const mapStateToProps = (data) => ({
  DataPruebas: data.init.get('pruebas'),
  message: data.init.get('testmessage')
});

const mapDispatchToProps = (dispatch) => ({
  getData: (id) => {
    dispatch(getPruebas(id))
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps )(Alumno)

const styles = StyleSheet.create({
  ViewSeparation:{
    paddingBottom:10,
    fontSize:14,
    paddingHorizontal:20
  }
})