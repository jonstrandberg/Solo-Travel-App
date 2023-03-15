import { StyleSheet, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from "./component/Home";
import Event from "./component/Event";
import Profile from "./component/Profile";

// Screen names
const homeDisplayName = 'Home'
const eventDisplayName = 'Events'
const profileDisplayName = 'Profile'

const Tab = createBottomTabNavigator()


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
              iconName = focused ? 'earth' : 'earth-outline'
            } else if (rn === 'Events') {
              iconName = focused ? 'today' : 'today-outline'
            } else if (rn === 'Profile') {
              iconName = focused ? 'person' : 'person-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          }
        })}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Events" component={Event}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
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