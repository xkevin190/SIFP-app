import React, { Component } from 'react';
import FloatButtons from './components/FloatButtons'
import DialogForm from './components/DialogForm'
import { sectionsData , logout} from '../actions/actions'
import {Container, Content, List, ListItem, Text, Body, Right, Button } from 'native-base';
import {connect} from 'react-redux';
import {validateData} from '../utils/Validator'


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
        <DialogForm modalVisible={this.state.modalVisible} data={data} close={this.closeModal} register={ this.props.getData} />
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
  getData: () => {
    dispatch(sectionsData())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sections);