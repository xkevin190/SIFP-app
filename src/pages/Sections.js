import React, { Component } from 'react';
import FloatButtons from './components/FloatButtons'
import DialogForm from './components/DialogForm'
import { sectionsData , logout} from '../actions/actions'
import {Container, Content, List, ListItem, Text, Body, Right, Button, View , Icon } from 'native-base';
import {connect} from 'react-redux';
import {validateData} from '../utils/Validator'
import {setData} from '../firebase/index'
import NavBar from './components/NavBar'

class Sections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,
  };
  
  static navigationOptions = {
    header: null,
  };

  componentDidMount(){
    this.props.getData()
    
  }
  
  go(data, key)
  {
    this.props.navigation.navigate('ViewSections' ,{
      data,
      key:key,
      ...this.props.setAction 
    })
  }
  
  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  closeModal =()=>{
    this.setState({modalVisible:false})
   
  }

  render() {
    const  {setAction} = this.props
    const data = validateData(this.props.jobsGrup)
    
    return (
      <> 
        <NavBar navigation={this.props.navigation}/>
        <DialogForm modalVisible={this.state.modalVisible} 
          data={data} 
          close={this.closeModal}
          register={setAction.setSections}
          
        />
          <Container>
            <Content>
              {data.map( (seciones, key) =>{
             
               return  <List key={seciones.uid}  > 
                  <ListItem onPress={() =>{this.go(seciones, key) }} thumbnail button={true} >
                    <Body> 
                      <Text>{seciones.name}</Text>
                      <Text note numberOfLines={1}>{seciones.caracteristicas}</Text>
                      <Text note numberOfLines={1}>{seciones.alumnos?Object.keys(seciones.alumnos).length: 0} Ingregantes</Text>
                    </Body>
                    <Right style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                      <Button transparent /*onPress={() =>{setAction.removeSections(seciones.uid) }} */>
                        <Icon style={{color:'#00695c'}} type='MaterialIcons' name='edit'/>
                      </Button>
                      <Button transparent onPress={() =>{setAction.removeSections(seciones.uid) }}>
                        <Icon style={{color:'#00695c'}}   type='MaterialIcons' name='delete'/>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              })
              }
              {data.length === 0 &&
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
  setAction: new setData()
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(sectionsData())
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Sections);