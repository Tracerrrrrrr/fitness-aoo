import { NativeBaseProvider, Text, Box, ScrollView } from 'native-base';
import Login from "./Screens/Login"
import MainScreen from './Screens/MainScreen';
import AddExercise from "./Screens/AddExercise"
const App=()=>{
  return(
    <>
  <NativeBaseProvider>
    <ScrollView>
  <Login/>
  <MainScreen/>
  <AddExercise/>
  </ScrollView>
  </NativeBaseProvider>
    </>
  )
}
export default App;