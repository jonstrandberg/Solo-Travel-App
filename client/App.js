import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './Screens/LoginScreen'
import UserRegScreen from './Screens/UserRegScreen'
import Navigator from './navigation/Navigator'

const Stack = createStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="User Registration" component={UserRegScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Navigator" component={Navigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App