import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { addEvent } from '../services/EventService';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomDrawer from '../components/BottomDrawer';
import EventCalendar from '../components/EventCalender';
import TimeSelector from '../components/TimeSelector';
import DurationSelector from '../components/DurationSelector';

const AddEventScreen = ({ activeUser }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [capacity, setCapacity] = useState('');
  const [meetingPoint, setMeetingPoint] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [isCalendarSheetOpen, setIsCalendarSheetOpen] = useState(false)
  const [isStartTimeSheetOpen, setIsStartTimeSheetOpen] = useState(false)
  const [isDurationSheetOpen, setIsDurationSheetOpen] = useState(false)

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    setLocation(route.params.cityId)
  }, [route.params.cityId]);

  const handleAddEvent = () => {
    if (!title || !date || !time || !duration || !description || !location || !capacity || !meetingPoint) {
      Alert.alert('Error', 'All fields are required!')
      return
    }
    const event = {
      title,
      date,
      time,
      duration,
      description,
      meetingPoint,
      location: {
        id: location,
        name: cityName,
        country: {
          id: route.params.countryId,
          name: countryName,
        },
      },
      creator: {
        id: 5   //HARD CODED
      },
      capacity,
    };
    addEvent(event)
      .then((newEvent) => {
        navigation.navigate('Event Details', { event: newEvent });
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error', 'Failed to add event');
      });
  }

  const handleOpenCalendarSheet = () => {
    setIsCalendarSheetOpen(true)
  }
  const handleCloseCalendarSheet = () => {
    setIsCalendarSheetOpen(false)
  }
  const handleAddDate = (selectedDate) => {
    setDate(selectedDate)
    setIsCalendarSheetOpen(false)
  }

  const handleOpenStartTimeSheet = () => {
    setIsStartTimeSheetOpen(true)
  }
  const handleCloseStartTimeSheet = () => {
    setIsStartTimeSheetOpen(false)
  }
  const handleAddStartTime = (selectedTime) => {
    setTime(selectedTime)
    setIsStartTimeSheetOpen(false)
  }

  const handleOpenDurationSheet = () => {
    setIsDurationSheetOpen(true)
  }
  const handleCloseDurationSheet = () => {
    setIsDurationSheetOpen(false)
  }
  const handleAddDuration = (selectedDuration) => {
    setDuration(selectedDuration)
    setIsDurationSheetOpen(false)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#757575"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.timeDateInputContainer}>
        <TextInput
          style={styles.timeDateInput}
          placeholderTextColor="#757575"
          placeholder="Select Date"
          value={date}
          onChangeText={setDate} //NOT SURE IF THIS IS NEEDED, IS SET BY THE COMPONENT
          editable={false}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOpenCalendarSheet} style={styles.inputButton}>
            <Text>Select Date</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomDrawer visible={isCalendarSheetOpen} onClose={handleCloseCalendarSheet}>
        <EventCalendar onAddDate={handleAddDate} />
      </BottomDrawer>

      <View style={styles.timeDateInputContainer}>
        <TextInput
          style={styles.timeDateInput}
          placeholderTextColor="#757575"
          placeholder="Time"
          value={time}
          onChangeText={setTime} //NOT SURE IF THIS IS NEEDED, IS SET BY THE COMPONENT
          editable={false}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOpenStartTimeSheet} style={styles.inputButton}>
            <Text>Set Start Time</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomDrawer visible={isStartTimeSheetOpen} onClose={handleCloseStartTimeSheet}>
        <TimeSelector onAddStartTime={handleAddStartTime} />
      </BottomDrawer>

      <View style={styles.timeDateInputContainer}>
        <TextInput
          style={styles.timeDateInput}
          placeholderTextColor="#757575"
          placeholder="Duration"
          value={duration}
          onChangeText={setDuration} //NOT SURE IF THIS IS NEEDED, IS SET BY THE COMPONENT
          editable={false}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOpenDurationSheet} style={styles.inputButton}>
            <Text>Set Duration</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomDrawer visible={isDurationSheetOpen} onClose={handleCloseDurationSheet}>
        <DurationSelector onAddDuration={handleAddDuration} />
      </BottomDrawer>

      <TextInput
        style={styles.input}
        placeholderTextColor="#757575"
        placeholder="Maximum Capacity"
        value={capacity}
        onChangeText={setCapacity}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#757575"
        placeholder="Meet-up Point"
        value={meetingPoint}
        onChangeText={setMeetingPoint}
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
  timeDateInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  timeDateInput: {
    height: 50,
    width: '55%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#BDBDBD',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '44%'
  },
  inputButton: {
    height: 40,
    width: '100%',
    marginLeft: 10,
    backgroundColor: '#BDBDBD',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4d4dff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignSelf: 'stretch'
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddEventScreen