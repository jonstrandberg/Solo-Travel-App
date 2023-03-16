import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { getEvents } from '../services/EventService';
import EventDetails from './EventDetails';
import AddEventScreen from './AddEventScreen'


const Stack = createStackNavigator()

const EventsList = () => {
  const [event, setEvent] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getEvents().then(json => {
      setEvent(json);
    });
  }, []);

  const handleEventPress = (event) => {
    navigation.navigate('Event Details', { event });
  };

  const handleAddEventPress = () => {
    navigation.navigate('Add Event Details', { event });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {event.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.box}
          onPress={() => handleEventPress(item)}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddEventPress}>
        <Text style={styles.addButtonText}>Add Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Events = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsList} />
      <Stack.Screen name="Event Details" component={EventDetails} />
      <Stack.Screen name="Add Event Details" component={AddEventScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#002060'
  },
  box: {
    width: '48%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#254C94'
  },
  addButton: {
    width: '48%',
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    fontSize: 18,
    color: '#555',
  },
});

export default Events;
