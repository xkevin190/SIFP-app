import React, { Component } from 'react';
import FloatButtons from './components/FloatButtons'
import DialogForm from './components/DialogForm'
import {jobRegister , logout} from '../actions/actions'
import {Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {View} from 'react-native'
import {connect} from 'react-redux';
import {validateData} from '../utils/Validator'

class Sections extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false,
  };

  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  closeModal =()=>{
    this.setState({modalVisible:false})
   
  }

  render() {
    const data = validateData(this.props.jobsGrup)
    console.log(data)
    return (
      <>
        <DialogForm modalVisible={this.state.modalVisible} data={data} close={this.closeModal} register={this.props.jobRegister} />
          <Container>
            <Content>
              {data.map( (seciones, key) =>{
                return <List key ={key}>
                  <ListItem thumbnail >
                    <Body>
                      <Text>{seciones.name}</Text>
                      <Text note numberOfLines={1}>{seciones.caracteristicas}</Text>
                      <Text note numberOfLines={1}>0 Ingregantes</Text>
                    </Body>
                    <Right>
                      <Button transparent>
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
  jobsGrup: data.init.get('groupData')
});

const mapDispatchToProps = (dispatch) => ({
  register:jobRegister
});

export default connect(mapStateToProps,{jobRegister, logout})(Sections);