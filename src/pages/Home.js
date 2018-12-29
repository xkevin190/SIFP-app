/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header,Left, Content, Button,Icon, Form, Item, Input, Label,Body,Title,Right,Text  } from 'native-base';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: 'hello word' };
      }

    helloword = (event) =>{
        console.log(event)
        //this.props.logout()
   }
    render() {
        console.log('hello console')
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button primary full onPress={this.helloword}><Text> Primary </Text></Button>
        </Content>
      </Container>
    );
  }
}
