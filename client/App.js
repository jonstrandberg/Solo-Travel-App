import { StyleSheet, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from "./component/Home";
import Event from "./component/Event";
import Profile from "./component/Profile";
import CityDetails from "./component/CityDetails";

// Screen names
const homeDisplayName = 'Home'
const eventDisplayName = 'Events'
const profileDisplayName = 'Profile'

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator ()


const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let rn = route.name

            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === 'Events') {
              iconName = focused ? 'list' : 'list-outline'
            } else if (rn === 'Profile') {
              iconName = focused ? 'settings' : 'settings-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          }
        })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Events" component={Event}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>

      <Stack.Navigator>
        <Stack.Screen name="CityDetails" component={CityDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#979879'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  },
  locationsContainer: {
    paddingHorizontal: 10
  },
  locationItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  }
});

export default App;