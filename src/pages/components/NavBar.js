
   import React, { Component } from 'react';
   import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
   
   class NavBar extends Component {
     render() {
         console.log(this.props.initialRouteParams)
       return (
            <Header>
                {this.props.initialRouteParams.title !== this.props.title &&
                <Left>
                <Button transparent onPress={()=>this.props.navigation.pop()}>
                    <Icon name='arrow-back' />
                </Button>
                </Left>
                }
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
                <Button transparent>
                    <Icon name='more' />
                </Button>
                </Right>
             </Header>
       );
     }
   
   }
   
   export default NavBar;