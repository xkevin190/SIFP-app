
   import React, { Component } from 'react';
   import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
   import {TouchableHighlight, StyleSheet} from 'react-native'
   
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
        const {navigation} = this.props
        console.log(navigation)
       return (
            <Header style={{backgroundColor:'#004d40'}} androidStatusBarColor='#004d40' >
                {navigation.state.routeName !== 'Sections' &&
                <Left>
                <TouchableHighlight 
                 underlayColor='#eeeeee'
                 style={{
                     paddingHorizontal:10,
                     paddingVertical:6,
                     borderRadius:100
                 }}
                 
                 onPress={()=>{navigation.pop()}}
                >    
                   
                     <Icon style={{color:'white', fontSize:24,}}  name='arrow-back'  />
                   
                </TouchableHighlight>
                </Left>
                }
                <Body>
                <Title style={{paddingHorizontal:10}}>SIPF</Title>
                </Body>
                <Right>
                <Button  transparent >
                    <Icon name='search' />
                </Button>
                </Right>
             </Header>
       );
     }
   
   }
   
   export default NavBar;


   const styles = StyleSheet.create({
    
   })