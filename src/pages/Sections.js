import React, { Component } from 'react';
import FloatButtons from './components/FloatButtons'
import DialogForm from './components/DialogForm'
import { sectionsData , logout} from '../actions/actions'
import {Container, Content, List, ListItem, Text, Body, Right, Button, View } from 'native-base';
import {connect} from 'react-redux';
import {validateData} from '../utils/Validator'
import {setData} from '../firebase/index'

class Sections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,
  };

  componentDidMount(){
    this.props.getData()
  }
  
  go(id){
    this.props.navigation.navigate('ViewSections' ,{
      itemId:id ,
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
        <DialogForm modalVisible={this.state.modalVisible} data={data} close={this.closeModal} register={setAction.setSections} />
          <Container>
            <Content>
              {data.map( (seciones, key) =>{
               return  <List key={seciones.uid}  > 
                  <ListItem onPress={() =>{this.go(seciones.uid) }} thumbnail button={true} >
                    <Body> 
                      <Text>{seciones.name}</Text>
                      <Text note numberOfLines={1}>{seciones.caracteristicas}</Text>
                      <Text note numberOfLines={1}>0 Ingregantes</Text>
                    </Body>
                    <Right>
                      <Button transparent onPress={() =>{setAction.removeSections(seciones.uid) }}>
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              })
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
  setAction: new setData
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(sectionsData())
  }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Sections);