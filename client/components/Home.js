import { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { getLocations } from "../services/LocationService"
import CityDetails from "./CityDetails"
import EventDetails from "./EventDetails"

const Stack = createStackNavigator()

const CitiesList = () => {
  const [location, setLocation] = useState([])
  const navigation = useNavigation();

  useEffect(() => {
    getLocations()
      .then(json => {
        setLocation(json)
      })
  }, [])

  const handleCityPress = (city) => {
    navigation.navigate('City Details', { city })
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={location}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCityPress(item)}>
            <View style={styles.cityItem}>
              <Text style={styles.cityText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const Home = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name='Explore Cities' component={CitiesList} options={{ headerShown: false }} />
      <Stack.Screen name='City Details' component={CityDetails} options={({ route }) => ({ title: route.params.city.name })} />
      <Stack.Screen name='Event Details' component={EventDetails} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cityItem: {
    backgroundColor: "#254C94",
    padding: 15,
    margin: 8,
    width: 170,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cityText: {
    color: '#fff',
    textAlign: 'center',
    fontSize:17,
    fontWeight:'bold'
  },
})

export default Home;