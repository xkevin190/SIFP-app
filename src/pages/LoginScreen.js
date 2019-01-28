import React, {Component} from 'react';
import { Container,  Content, Button, Form, Item, Input, Label,Text  } from 'native-base';
import {StyleSheet} from 'react-native';
import {logout} from '../actions/actions'
import {connect} from 'react-redux'



 class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isShowingText: 'hello word',
          users:'',
          password:''
        };
      }
    static navigationOptions = {
        header: null,
    };

    helloword = (event) =>{
       const data={
        users:this.state.user,
        password: this.state.password
       }
       this.props.logout(data)
   }
    render() {
        // console.log(this.props)
        return (
            <Container style={{padding:20 , backgroundColor:'#FFFFFF'}}>
                <Content>
                    <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                        <Input onChangeText={(text)=>{this.setState({user:text})}}
                        />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input 
                            onChangeText={(text)=>{this.setState({password:text})}} 
                            secureTextEntry
                        />
                        </Item>
                    </Form> 
                        <Button style={styles.dios} primary full onPress={()=>this.props.navigation.navigate('Sections')}><Text>bueno hay vamos</Text></Button>
                </Content>
        </Container>
        );
  }
}

const mapStateToProps = (state) => ({
    state
  });
  
  const mapDispatchToProps = (dispatch) => ({
    logout:logout
  });
  
  export default connect(mapStateToProps,{logout})(LoginScreen);


const styles = StyleSheet.create({
    dios: {
     marginTop:20
    },
    red: {
      color: 'red',
    },
  });