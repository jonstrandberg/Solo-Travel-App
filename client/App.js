import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName={homeDisplayName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              let rn = route.name

              if (rn === homeDisplayName) {
                iconName = focused ? 'home' : 'home-outline'
              } else if (rn === eventDisplayName) {
                iconName = focused ? 'list' : 'list-outline'
              } else if (rn === profileDisplayName) {
                iconName = focused ? 'settings' : 'settings-outline'
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            }
          })}>

          {/* screenOptions={{
            activeTintColor:'tomato',
            inactiveTintColor: 'grey',
            labelStyle: {paddingBottom: 10, fontSize:10},
            style: {padding: 10, height:70}
          }} */}

            <Tab.Screen name={homeDisplayName} component={Home}/>
            <Tab.Screen name={eventDisplayName} component={Event}/>
            <Tab.Screen name={profileDisplayName} component={Profile}/>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#979879'
  },
});

export default App
