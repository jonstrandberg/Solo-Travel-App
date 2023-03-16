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
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Top Cities To Explore!</Text>
      </View>
        <FlatList
          data={location}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCityPress(item)}>
              <View>
                <Text>{item.name}</Text>
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
  titleContainer: {
    backgroundColor: '#0B909B',
    width: '100%',
    marginTop:5,
    marginBottom:10
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
})

export default Home;