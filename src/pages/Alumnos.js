import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Text,  Footer, FooterTab, Button, Icon, Picker } from 'native-base';
import {connect} from 'react-redux'
import {TestResultFilter} from '../utils/Validator'
import {getPruebas} from '../actions/actions'
import ViewResult from './components/ViewResult'
import PlayTest from './components/PlayTest'
import CoreFuctions from '../core'
import Navar from './components/NavBar'


const core = new CoreFuctions()

class Alumno extends Component {
  constructor(props) {

    super(props);
    this.state = {
      selected: "medidas_antropometricas",
      tabSelected:"result"
    };
  }
  componentDidMount(){
    const params = this.props.navigation.state.params.data
    this.props.getData(params.uid )
    
  }

  onValueChange(value) {
    this.setState({
      selected: value
      
    });
  }

  backtoResult=()=>{
    this.setState({tabSelected:'result'})
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    const params = this.props.navigation.state.params.data
    const data = TestResultFilter(this.props.DataPruebas, this.state.selected)

    return (
      <>
        <Navar navigation={this.props.navigation} search={null}/>
        <View 
          style={{
            borderRadius:2,
            borderBottomWidth:0.5,
            borderColor:'#004d40',
          }}
        >  
          <Text style={{ paddingHorizontal:15, paddingTop:15 ,fontSize:24}}> {params.nombre} {params.apellido}</Text>
          <Picker
            note
            mode="dropdown"
            style={{ marginHorizontal:15 , width:'90%' }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Medidas Antropometricas" value="medidas_antropometricas" />
            <Picker.Item label="Flexibilidad  Articular." value="flexibilidad_articular" />
            {/* <Picker.Item label="Test de Resitencia Muscular" value="resitencia_muscular" />
            <Picker.Item label="Test de Fuerza" value="test_fuerza" />
            <Picker.Item label="Test de Equilibrio" value="test_equilibrio" /> */}
          </Picker>
          {this.state.tabSelected !== 'play' &&
            <View style={{display:'flex',  flexDirection: 'row', justifyContent:'space-between' }}> 
              <View style={{width:'50%'}}>
                <Text style={styles.ViewSeparation}> Cedula: {params.cedula} </Text>
                <Text style={styles.ViewSeparation}> Edad: {params.edad}</Text>
                <Text style={styles.ViewSeparation}> Sexo: {params.sexo}</Text>
              </View>
              <View style={{width:'50%', borderLeftWidth:0.5 , borderColor:'#004d40', paddingHorizontal:10, display:'flex',}}>
                <Text style={styles.ViewSeparation}> Estatura: {params.estatura} CM </Text>
                <Text style={styles.ViewSeparation}> Peso: {params.peso} kilos</Text>
              </View>    
            </View>
          }
        </View>

        {this.state.tabSelected === 'result' && <ViewResult data={data} 
          logo={this.props.logo.toJS()[this.state.selected]}/>}

        {this.state.tabSelected === 'play' && <PlayTest 
          personalInformation={params}
          action={ core.SelectedMultipleFuctions }
          message={this.props.message.toJS()}
          selected={this.state.selected}
          backToResult={this.backtoResult}
          

        />}
        {this.state.tabSelected !== 'play' &&    
          <Footer style={{
            
          }} >

            <FooterTab  style={{backgroundColor:'#FFFFFF',
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 7,
              shadowRadius: 16.00,
              
              elevation: 24,
            }}>
              <Button onPress={()=>this.setState({tabSelected:'play'})}>
                <Icon  style={{color:this.state.tabSelected === 'play'? '#00695c':'gray' }} name="play" />
              </Button>
             
              <Button onPress={()=>this.setState({tabSelected:'result'})}>
                <Icon  style={{color:this.state.tabSelected === 'result'? '#00695c':'gray' }} type='MaterialIcons'  name="assignment" />
              </Button>
            </FooterTab>
          </Footer>
        }   
      </>

     
    );
  }
}

const mapStateToProps = (data) => ({
  DataPruebas: data.init.get('pruebas'),
  message: data.init.get('testMessage'),
  logo: data.init.get('images')
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