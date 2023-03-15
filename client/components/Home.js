import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <FlatList
        data={location}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCityPress(item)}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.name}, {item.country.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#FFF',
  },
  item: {
    flex: 1,
    height: 120,
    margin: 5,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#254C94',
    fontWeight: 'bold',
  },
});

export default Home;