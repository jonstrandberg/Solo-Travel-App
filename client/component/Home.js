import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Home = () => {
  const [location, setLocation] = useState([])
  const navigation = useNavigation();

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = function () {
    fetch('http://127.0.0.1:8080/locations')
      .then(res => res.json())
      .then(json => {
        setLocation(json)
      })
  }

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

export default Home;