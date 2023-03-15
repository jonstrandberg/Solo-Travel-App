import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { getLocations } from "../services/LocationService";
import CityDetails from "./CityDetails";

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
    navigation.navigate('CityDetails', { city });
  };

  return (
    <View>
      <FlatList
        data={location}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCityPress(item)}>
            <Text>{item.name}, {item.country.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore Cities" component={CitiesList} />
      <Stack.Screen name="CityDetails" component={CityDetails} options={({ route }) => ({ title: route.params.city.name })} />
    </Stack.Navigator>
  )
}

export default Home;