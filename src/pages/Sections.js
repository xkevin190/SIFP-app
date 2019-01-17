import React, { Component } from 'react';
import FloatButtons from './components/FloatButtons'
import DialogForm from './components/DialogForm'
import {jobRegister , logout} from '../actions/actions'
import {connect} from 'react-redux';

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
    return (
      <>
      <DialogForm modalVisible={this.state.modalVisible} close={this.closeModal} register={this.props.jobRegister} />
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