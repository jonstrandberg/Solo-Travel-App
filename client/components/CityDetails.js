import {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getEventsByLocationId } from "../services/EventService";

function CityDetails() {
  const route = useRoute();
  const { city } = route.params;

  const [events, setEvents] = useState([])

  useEffect(() => {
    console.log(city)
    getEventsByLocationId(city["id"])
    .then(json => {
      setEvents(json)
    })
  }, [])

  return (
    <View>

      <Text>City name: {city.name}</Text>
      <Text>Country: {city.country.name}</Text>

      <FlatList
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

export default CityDetails;