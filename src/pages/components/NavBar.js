
   import React, { Component } from 'react';
   import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
   import {TouchableHighlight, StyleSheet, View, TextInput , Keyboard} from 'react-native'
   import * as Animatable from 'react-native-animatable'

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

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    
    
      }
    
      keyboardDidShow = () => {
        this.setState({ searchBarFocused: true })
      }
    
      keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
      }
    
      keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
      }

     render() {
        const {navigation} = this.props
        console.log(this.state.search)
       return (
            <Header style={{backgroundColor:'#004d40' }} androidStatusBarColor='#004d40' >
                { (navigation.state.routeName !== 'Sections' && !this.state.search) &&
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
                { !this.state.search &&
                    <>
                        <Body>
                        <Title style={{paddingHorizontal:10}}>SIPF</Title>
                        </Body>
                        <Right>
                        <Button  transparent onPress={()=> this.onChange()}  >
                         <Icon name='search' />
                        </Button>
                        </Right>
                    </>
                }
                {this.state.search &&
                <Animatable.View animation='slideInUp' duration={200}  style={styles.search}>
                    <Animatable.View animation={this.state.searchBarFocused  ? "fadeInLeft" : "fadeInRight"} duration={400}>
                                <Icon type='MaterialIcons' name={"arrow-back"} 
                                  style={{fontSize:24}}
                                  onPress={()=>this.onChange()} 
                                 />
                            </Animatable.View>    
                    <TextInput placeholder='Search' style={{fontSize:17 , marginTop:5 ,marginLeft:10}}/>
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