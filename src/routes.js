import { createStackNavigator , createAppContainer } from "react-navigation";
import LoginScreen from './pages/LoginScreen'
import HomeScreen from './pages/HomeScreen'
import Sections from './pages/Sections'
import ViewSections from './pages/ViewSections'

const AppStackNavigator = createStackNavigator({
    Login:LoginScreen,
    Home:HomeScreen,
    Sections:Sections,
    ViewSections:ViewSections
  })
  
 export default AppContainer = createAppContainer(AppStackNavigator);
  