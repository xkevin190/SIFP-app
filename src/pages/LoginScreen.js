import React, {Component} from 'react';
import { Container,  Content, Button, Form, Item, Input, Label,Text  } from 'native-base';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux'



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isShowingText: 'hello word',
          users:'',
          password:''
        };
      }

    helloword = (event) =>{
       const data={
        users:this.state.user,
        password: this.state.password
       }
       this.props.LogoutActions(data)
   }
    render() {
    return (
        <Container>
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
                     
                    <Button style={styles.dios} primary full onPress={()=>{Actions.push('home')}}><Text>bueno hay vamos</Text></Button>
            </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    dios: {
     marginTop:20
    },
    red: {
      color: 'red',
    },
  });