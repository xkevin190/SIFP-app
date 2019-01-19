
   import React, { Component } from 'react';
   import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
   import {View ,Text} from 'react-native'
   import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
   
   class NavBar extends Component {
    _menu = null;

    setMenuRef = ref => {
    this._menu = ref;
    };

    hideMenu = () => {
    this._menu.hide();
    };

    showMenu = () => {
    this._menu.show();
    };
        
     render() {
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
                <Button  transparent style={{marginRight:20 }}>
                    <Icon name='search' />
                </Button>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', position:'absolute' }}>
                    <Menu 
                    ref={this.setMenuRef}
                    button={ <Button onPress={this.showMenu} transparent>
                        <Icon name='more' />
                    </Button>}
                    >
                    <MenuItem onPress={()=>this.props.navigation.push('sections')}>Panel de Registro</MenuItem>
                    <MenuItem onPress={this.hideMenu}>Logout</MenuItem>
                    <MenuItem onPress={this.hideMenu}>salir</MenuItem>
                    </Menu>
                 </View>
               
                </Right>
             </Header>
       );
     }
   
   }
   
   export default NavBar;