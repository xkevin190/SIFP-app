import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
import FloatButtons from './components/FloatButtons'
import RegisterIntegrante from './components/RegisterIntegrante';
import {GetDataPerson} from '../utils/Validator'
import {connect} from 'react-redux'
import {searchData} from '../actions/actions'
import {registerAlumno ,editAlumno } from '../actions/setActions'
import NavBar from './components/NavBar'
import Confirm from '../components/Confirm'

class ViewSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      alumno:'',
      delete:false,
      update:null
    };
  }

  
  static navigationOptions = {
    header: null,
  };

  delete= async (value)=>{
    const params = this.props.navigation.state.params
    params.removeAlumno(params.data.uid, value) 
    this.setState({delete:false})
  }

  onCancel=()=>{
    this.setState({delete:false})
  }

  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  closeModal =()=>{
    this.setState({
      modalVisible:false , 
      update:null,
      uid:null
    })
   
  }

  go(data){
    this.props.navigation.navigate('AlumnoScreen',{
      data
    })
  }

  render() {
    
    const params = this.props.navigation.state.params
    const alumnos = GetDataPerson( this.props.alumnos ,  params.key )
     let searchText = this.props.search.toLowerCase()
     const filteredSections = searchText 
     ? alumnos.filter(item => {
         return (
           item.cedula.toLowerCase().includes(searchText) ||
           item.nombre.toLowerCase().includes(searchText)
         );
       })
     : alumnos;

    return (
      <> 
         {this.state.delete &&
        <Confirm 
           message=' Esta seguro que desea eliminar esta seccion?' 
           title='Confirmar' 
           delete={this.delete}
           cancel={this.onCancel} 
           uid={this.state.uid} 
  
           />
        }   
        <NavBar navigation={this.props.navigation} search={this.props.searchData}/>
        <RegisterIntegrante modalVisible={this.state.modalVisible} 
           close={this.closeModal}
           uidSection={params.data.uid}
           register={this.props.register}
           message={this.props.message}
           update={this.state.update}
           updateAction={this.props.editAlumno}
          
        />
        <View 
          style={{
            backgroundColor:'dark-gray',
            minHeight: '20%',
            borderRadius:2,
            borderBottomWidth:1,
            borderColor:'#dbead8',
          }}
        >
          <Text style={{ padding:20,fontSize:24}}
          > {params.data.name} </Text>
          <Text
            style={{
              paddingHorizontal:20,
              fontSize:14
            }}
          > {params.data.caracteristicas} </Text>
          </View>
          <Container>
            <Content>
              {filteredSections.map( (alumno, key)=>{
                return <List key={key}>
                  <ListItem style={{
                    borderBottomWidth:0.5
                  }} >
                    <Left>
                      <Text>{alumno.nombre} {alumno.apellido}</Text>
                    </Left>
                    <View style ={{display:'flex' , flexDirection:'row'   }} >
                    <Button transparent onPress={()=>{this.setState({modalVisible:true ,update:alumno})}} >
                        <Icon style={{color:'#26a69a'}} type='MaterialIcons' name='edit'/>
                      </Button>
                      <Button transparent onPress={()=>this.setState({delete:true ,uid:alumno.uid})}>
                        <Icon style={{color:'#26a69a'}}   type='MaterialIcons' name='delete'/>
                      </Button>
                     <Button  transparent  onPress={()=>{this.go(alumno)}} >
                        <Icon style={{color:'#26a69a'}}   type='MaterialIcons' name='visibility'/>
                      </Button>
                    </View>
                  </ListItem>
                </List>
              })
              }
            </Content>
            {filteredSections.length === 0 &&
            <Text style={{position:'absolute' , top:'40%' , textAlign:'center', paddingHorizontal:20}}>no tienes integrantes agregados, porfavor agrea uno para continuar</Text>
            } 
          </Container>
        <FloatButtons showModal={this.setModalVisible}/>
      </>
     
    );
  }
}

const mapStateToProps = (data) => ({
  message: data.init.get('testMessage'),
  alumnos: data.init.get('groupData'),
  search: data.init.get('search')
});

const mapDispatchToProps=(dispatch) => ({
  searchData: (data)=>{
    dispatch(searchData(data))
  },
  register:(uid,  values , message, callback)=>
     dispatch(registerAlumno(uid,  values , message, callback)),

  editAlumno: (uid,  uidAlumnno  , values )=>
     dispatch(editAlumno(uid,  uidAlumnno  , values ))
})



export default connect(mapStateToProps, mapDispatchToProps)(ViewSections)