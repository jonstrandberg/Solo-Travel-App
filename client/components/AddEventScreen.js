import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { addEvent } from '../services/EventService';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddEventScreen = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState(null);
    const [countryName, setCountryName] = useState('');
    const [cityName, setCityName] = useState('');
  
    const navigation = useNavigation();
    const route = useRoute();
  
    useEffect(() => {
      setLocation(route.params.cityId);
    }, [route.params.cityId]);
  
    const handleAddEvent = () => {
        const event = {
          title,
          date,
          time,
          duration,
          description,
          location: {
            id: location,
            name: cityName,
            country: {
              id: route.params.countryId,
              name: countryName,
            },
          },
        };
  
      addEvent(event)
        .then(() => {
          console.log('Event added successfully');
          navigation.navigate('Event List');
        })
        .catch(error => {
          console.log(error);
          Alert.alert('Error', 'Failed to add event');
        });
    };
  
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Time"
            value={time}
            onChangeText={setTime}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Duration"
            value={duration}
            onChangeText={setDuration}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#757575"
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <View style={{ display: 'none' }}>
            <TextInput
              value={location ? location.toString() : ''}
              onChangeText={setLocation}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
            <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
        </View>
      );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#002060',
    },
    input: {
      height: 50,
      width: '100%',
      marginVertical: 10,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      borderColor: '#BDBDBD',
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: '#4d4dff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginTop: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default AddEventScreen