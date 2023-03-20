import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeScreen from "../Screens/HomeScreen";
import MyEventsScreen from "../Screens/MyEventsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator()

const Navigator = () => {

    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let rn = route.name

                    if (rn === 'Explore') {
                        iconName = focused ? 'earth' : 'earth-outline'
                    } else if (rn === 'My Events') {
                        iconName = focused ? 'today' : 'today-outline'
                    } else if (rn === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}>
            <Tab.Screen name='Explore' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='My Events' component={MyEventsScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default Navigator;