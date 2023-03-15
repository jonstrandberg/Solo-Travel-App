import {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';

function CityDetails() {
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

  return (
    <View>
      <Text>{city.name}</Text>
      <Text>{city.country.name}</Text>
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