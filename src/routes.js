
import { createStackNavigator , createAppContainer } from "react-navigation";
import index from './pages'
import HomeScreen from './pages/HomeScreen'
import Sections from './pages/Sections'
import ViewSections from './pages/ViewSections'
import Alumno from './pages/Alumnos'

const AppStackNavigator = createStackNavigator({
  initial:index,
  Home:HomeScreen,
  Sections:Sections,
  ViewSections:ViewSections,
  AlumnoScreen: Alumno
})

export default RouteContainer = createAppContainer(AppStackNavigator);
 