import React, { Component } from 'react';
import FloatButtons from './components/FloatButtons'
import DialogForm from './components/DialogForm'
import { sectionsData , searchData} from '../actions/actions'
import {Container, Content, List, ListItem, Text, Body, Right, Button, View , Icon, Alert } from 'native-base';
import {connect} from 'react-redux';
import {validateData} from '../utils/Validator'
import {setData} from '../firebase/index'
import NavBar from './components/NavBar'
import Confirm from '../components/Confirm'

class Sections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,
    delete:false,
    uid:'',
    update:null
  };
  
  static navigationOptions = {
    header: null,
  };


  componentDidMount(){

    
  }
  
  go(data, key)
  {
    this.props.navigation.navigate('ViewSections' ,{
      data,
      key:key,
      ...this.props.setAction 
    })
  }

  delete= async (value)=>{
    this.props.setAction.removeSections(value) 
    this.setState({delete:false})
  }

  onCancel=()=>{
    this.setState({delete:false})
  }
  
  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  closeModal =()=>{
    this.setState({modalVisible:false , update:null})
   
  }

  render() {
  
    const  {setAction} = this.props
    const data = validateData(this.props.jobsGrup)
    let searchText = this.props.search.toLowerCase()
     const filteredSections = searchText 
     ? data.filter(item => {
         return (
           item.name.toLowerCase().includes(searchText) 
         );
       })
     : data;
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
        <DialogForm modalVisible={this.state.modalVisible} 
          data={data} 
          close={this.closeModal}
          register={setAction.setSections}
          update={this.state.update}
          updateAction={setAction.editSeccion}
          
        /> 
        
        
          <Container>
            <Content>
              {filteredSections.map( (seciones, key) =>{
             
               return  <List key={seciones.uid}  > 
                  <ListItem onPress={() =>{this.go(seciones, key) }} thumbnail button={true} >
                    <Body> 
                      <Text>{seciones.name}</Text>
                      <Text note numberOfLines={1}>{seciones.caracteristicas}</Text>
                      <Text note numberOfLines={1}>{seciones.alumnos?Object.keys(seciones.alumnos).length: 0} Ingregantes</Text>
                    </Body>
                    <Right style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                      <Button transparent onPress={()=>{this.setState({modalVisible:true ,update:seciones })}} >
                        <Icon style={{color:'#26a69a'}} type='MaterialIcons' name='edit'/>
                      </Button>
                      <Button transparent onPress={()=>this.setState({delete:true ,uid:seciones.uid })}>
                        <Icon style={{color:'#26a69a'}}   type='MaterialIcons' name='delete'/>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              })
              }
              {filteredSections.length === 0 &&
              <Container>
                  <Text style={{position:'absolute' , top:'40%' , textAlign:'center', paddingHorizontal:20,}}>no tienes Grupos Agregados porfavor agrea uno para continuar</Text>
              </Container>
              }  
            </Content>
          </Container>
        <FloatButtons  showModal={this.setModalVisible}/>
      </>
    );
  }
}


const mapStateToProps = (data) => ({
  jobsGrup: data.init.get('groupData'),
  setAction: new setData(),
  search: data.init.get('search'),
  
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(sectionsData())
  },
  searchData: (data)=>{
    dispatch(searchData(data))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sections);