import {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import EventDetails from './EventDetails';

const Stack = createStackNavigator()

const CityDetails = () => {
  const route = useRoute();
  const { city } = route.params;

  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = function () {
    fetch(`http://127.0.0.1:8080/events?location_id=${city.id}`)
      .then(res => res.json())
      .then(json => {
        setEvents(json)
      })
  }

  const handleEventPress = (event) => {
    console.log (event)
    // navigation.navigate('Event Details', { event });
  };

  return (
    <View>

      <Text>City name: {city.name}</Text>
      <Text>Country: {city.country.name}</Text>
      <Text>Events:</Text>

      <FlatList
        data={events}
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

// const CityDetails = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='City Details' component={CityDetails} />
//       <Stack.Screen name='City Details' component={EventDetails} />
//     </Stack.Navigator>
//   )
// }

export default CityDetails;