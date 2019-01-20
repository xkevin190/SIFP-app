import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import FloatButtons from './components/FloatButtons'
import RegisterIntegrante from './components/RegisterIntegrante';
import {connect} from 'react-redux'


class ViewSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  closeModal =()=>{
    this.setState({modalVisible:false})
   
  }

  render() {
    const uid= this.props.navigation.state.params
    return (
      <>
        <RegisterIntegrante modalVisible={this.state.modalVisible} 
           close={this.closeModal}
           uidSection={uid}
          
        />
        <View 
          style={{
            backgroundColor:'dark-gray',
            minHeight: '20%',
            borderRadius:2,
          }}
        >
          <Text style={{ padding:20,fontSize:24}}
          > Grupo de Trabajo xxxx </Text>
          <Text
            style={{
              paddingHorizontal:20,
              fontSize:14
            }}
          > esta serian las caracteristicas que ingresa el  </Text>
          </View>
          <Container>
          <Content>
            <List>
              <ListItem selected>
                <Left>
                  <Text>Simon Mignolet</Text>
                </Left>
                <Right>
                  <Icon type="MaterialIcons"  name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
        <FloatButtons showModal={this.setModalVisible}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewSections);
