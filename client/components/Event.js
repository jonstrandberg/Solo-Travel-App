import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { getEvents } from '../services/EventService';
import EventDetails from './EventDetails';
import AddEventScreen from './AddEventScreen'


const Stack = createStackNavigator()

const EventsList = () => {
  const [event, setEvent] = useState([])
  const navigation = useNavigation()


    useEffect(() => {
    getEvents()
    .then(json => {
            setEvent(json)
        })
  }, [])

  const handleEventPress = (event) => {
    navigation.navigate('Event Details', {event})
  }

  const handleAddEventPress = () => {
    navigation.navigate('Add Event Details', {event})
  }
    
  return (
    <View>
      <FlatList
        data={event}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEventPress(item)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={handleAddEventPress}>
        <Text>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const Events = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Event List" component={EventsList}  />
      <Stack.Screen name="Event Details" component={EventDetails} options={({ route }) => ({ title: route.params.event.title})}/>
      <Stack.Screen name="Add Event Details" component={AddEventScreen} options={{ title: 'Add Event' }} />
    </Stack.Navigator>
  )
}


export default Events