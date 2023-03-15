import { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView,Text, FlatList, TouchableOpacity } from 'react-native'
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
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCityPress(item)}>
            <Text style={styles.cityItem}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Event Details' component={EventDetails} />
      <Stack.Screen name='Explore Cities' component={CitiesList} options={{ headerShown: false }}/>
      <Stack.Screen name='City Details' component={CityDetails} options={({ route }) => ({ title: route.params.city.name })} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  cityItem:{
    backgroundColor:"#254C94",
    color:"#fff",
    padding: 15,
    margin: 10,
    width:140,
    height:140
  }
})

export default Home;