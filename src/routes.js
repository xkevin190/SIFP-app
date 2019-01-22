import { createStackNavigator , createAppContainer } from "react-navigation";
import LoginScreen from './pages/LoginScreen'
import HomeScreen from './pages/HomeScreen'
import Sections from './pages/Sections'
import ViewSections from './pages/ViewSections'
import Alumno from './pages/Alumnos'
const AppStackNavigator = createStackNavigator({
    Login:LoginScreen,
    Home:HomeScreen,
    Sections:Sections,
    ViewSections:ViewSections,
    AlumnoScreen: Alumno
  })
  
 export default AppContainer = createAppContainer(AppStackNavigator);
  