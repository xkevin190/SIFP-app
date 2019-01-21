import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
import FloatButtons from './components/FloatButtons'
import RegisterIntegrante from './components/RegisterIntegrante';
import {GetDataPerson} from '../utils/Validator'
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
    const params = this.props.navigation.state.params
    const alumnos = GetDataPerson( this.props.alumnos ,  params.key )
    console.log('desde alumnos', alumnos)
    return (
      <>
        <RegisterIntegrante modalVisible={this.state.modalVisible} 
           close={this.closeModal}
           uidSection={params.data.uid}
           register={params.setPerson}
          
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
              {alumnos.map( (alumno, key)=>{
                return <List key={key}>
                  <ListItem style={{
                    borderBottomWidth:0.5
                  }} >
                    <Left>
                      <Text>{alumno.nombre} {alumno.apellido}</Text>
                    </Left>
                    <Right>
                     <Button  transparent >
                        <Text style={{color:'blue'}}>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              })
              }
            </Content>
            {alumnos.length === 0 &&
            <Text style={{position:'absolute' , top:'40%' , textAlign:'center', paddingHorizontal:20}}>no tienes Grupos Agregados porfavor agrea uno para continuar</Text>
            } 
          </Container>
        <FloatButtons showModal={this.setModalVisible}/>
      </>
     
    );
  }
}

const mapStateToProps = (data) => ({
  alumnos: data.init.get('groupData')
});



export default connect(mapStateToProps)(ViewSections)