import {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator()

const CityDetails = () => {
  const route = useRoute();
  const { city } = route.params;
  const navigation = useNavigation();

  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/events?location_id=${city.id}`)
      .then(res => res.json())
      .then(json => {setEvent(json)})
  }, [])

  const handleEventPress = (event) => {
    console.log (event)
    navigation.navigate('Event Details', { event });
  };

  return (
    <View>

      <Text>City name: {city.name}</Text>
      <Text>Country: {city.country.name}</Text>
      <Text>Events:</Text>

      <FlatList
        data={event}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEventPress(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}


export default CityDetails;