import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import FloatButtons from './components/FloatButtons'

export default class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  state = {
    modalVisible: false,
  };

  setModalVisible = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  }

  render() {
    return (
        <>
        <View style={{marginTop: 22 , }}>
        <Modal
          style={{backgroundColor:'black'}}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, width:'50%'}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible();
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
      <FloatButtons  showModal={this.setModalVisible}/>
      </>
    );
  }
}

