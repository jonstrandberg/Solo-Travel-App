import { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import HomeScreen from "../Screens/HomeScreen";
import MyEventsScreen from "../Screens/MyEventsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { getUserProfileByFirebaseId } from "../services/UserService"
import { auth } from "../firebase"

const Tab = createBottomTabNavigator()

const Navigator = () => {

    const [activeUser, setActiveUser] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                const user = auth.currentUser
                const userProfile = await getUserProfileByFirebaseId(user.uid);
                setActiveUser(userProfile);
                console.log ('current user:', user)
                console.log('user profile:', userProfile)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    console.log('activeUser in index:', activeUser);
    

    return (

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
            <Tab.Screen
                name='Explore'
                children={() => <HomeScreen activeUser={activeUser} />}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='My Events'
                children={() => <MyEventsScreen activeUser={activeUser} />}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='Profile'
                children={() => <ProfileScreen activeUser={activeUser} />}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default Navigator;
