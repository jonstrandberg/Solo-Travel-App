import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { getEvents } from '../services/EventService';
import EventDetails from './EventDetails';

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
    </View>
  );
};

const Events = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Event List" component={EventsList}  />
      <Stack.Screen name="Event Details" component={EventDetails} options={({ route }) => ({ title: route.params.event.title})}/>
    </Stack.Navigator>
  )
}



export default Events