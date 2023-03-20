// import { StyleSheet } from "react-native";
// import { NavigationContainer} from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons"
// import HomeScreen from "./Screens/HomeScreen";
// import MyEventsScreen from "./Screens/MyEventsScreen";
// import ProfileScreen from "./Screens/ProfileScreen";

// const Tab = createBottomTabNavigator()

// const App = () => {

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName='Home'
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName
//             let rn = route.name

//             if (rn === 'Explore') {
//               iconName = focused ? 'earth' : 'earth-outline'
//             } else if (rn === 'My Events') {
//               iconName = focused ? 'today' : 'today-outline'
//             } else if (rn === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline'
//             }

//             return <Ionicons name={iconName} size={size} color={color}/>
//           }
//         })}>
//         <Tab.Screen name='Explore' component={HomeScreen} options={{ headerShown: false }}/>
//         <Tab.Screen name='My Events' component={MyEventsScreen} options={{ headerShown: false }}/>
//         <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

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