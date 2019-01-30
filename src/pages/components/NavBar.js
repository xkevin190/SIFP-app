
   import React, { Component } from 'react';
   import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
   import {TouchableHighlight, StyleSheet, View, TextInput , BackAndroid} from 'react-native'
   import * as Animatable from 'react-native-animatable'
   import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

   class NavBar extends Component {
    _menu = null;
    state={
        search:false,
        searchBarFocused: false
    }

   
    setMenuRef = ref => {
    this._menu = ref;
    };

    hideMenu = () => {
    this._menu.hide();
    };

    showMenu = () => {
    this._menu.show();
    };
        
    onChange=()=>{
       this.setState({search:!this.state.search})
    }


    search = (value) =>{
        this.props.search(value)
    }
   
     render() {
        const {navigation} = this.props
       return (
            <Header style={{backgroundColor:'#004d40' }} androidStatusBarColor='#004d40' >
                { (navigation.state.routeName !== 'Sections' && !this.state.search) &&
                <Left style={{position:'absolute', left:10}}>
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
                { ( !this.state.search ) &&
                    <>
                        <Body style={{position:'absolute' , right:'50%' }}>
                        <Title style={{textAlign:'center'}}>S I P F</Title>
                        </Body>
                        {this.props.search &&
                        <Right>
                          <TouchableHighlight 
                            underlayColor='#eeeeee'
                            style={{
                                paddingHorizontal:40,
                                paddingVertical:6,
                                borderRadius:100
                            }}
                            onPress={()=> this.onChange()}  >
                         <Icon name='search' style={{fontSize:24 , color:'white'}} />
                        </TouchableHighlight>
                        <View style={{ flex: 1, alignItems: 'flex-end',  position:'absolute', height:40}}>
                            <Menu 
                            ref={this.setMenuRef}
                            button={ <Button onPress={this.showMenu} transparent>
                                <Icon name='more' />
                            </Button>}
                            >
                            <MenuItem onPress={()=>navigation.navigate('Login')}>Logout</MenuItem>
                            <MenuItem onPress={()=>BackAndroid.exitApp()}>salir</MenuItem>
                            </Menu>
                        </View>
                        </Right>
                        }
                    </>
                }
                {this.state.search &&
                <Animatable.View animation='bounceInRight' duration={100}  style={styles.search}>
                    <Animatable.View animation={this.state.searchBarFocused  ? "fadeInLeft" : "fadeInRight"} duration={400}>
                                <Icon type='MaterialIcons' name={"arrow-back"} 
                                  style={{fontSize:24}}
                                  onPress={()=>this.onChange()} 
                                 />
                            </Animatable.View>    
                    <TextInput placeholder='Search' 
                        style={{fontSize:17 , marginTop:5 ,marginLeft:10 ,width:100}}
                        onChangeText={this.search}
                        />
                </Animatable.View>
                }
             </Header>
       );
     }
   
   }
   
   export default NavBar;


   const styles = StyleSheet.create({
     search:{
        height:45,
        backgroundColor:'white' ,
        width:'100%',
        display:'flex',
        flexDirection: 'row',  
        alignItems:'center' ,
        paddingHorizontal:10 ,
        marginTop:5
     }
   })
