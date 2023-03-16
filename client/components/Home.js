import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { getLocations } from "../services/LocationService";
import CityDetails from "./CityDetails";

const Stack = createStackNavigator()

const CitiesList = () => {
  const [location, setLocation] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getLocations().then((json) => {
      setLocation(json);
    });
  }, []);

  const handleCityPress = (city) => {
    navigation.navigate('CityDetails', { city });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={location}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleCityPress(item)}
            style={styles.box}
          >
            <Text style={styles.title}>{item.name}, {item.country.name}</Text>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore Cities" component={CitiesList} />
      <Stack.Screen
        name="CityDetails"
        component={CityDetails}
        options={({ route }) => ({ title: route.params.city.name })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#002060',
  },
  box: {
    width: '48%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#254C94',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default Home;