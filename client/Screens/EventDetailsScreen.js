import React, { useEffect, useState } from "react";

import { View, Text, Button, FlatList, SafeAreaView, StyleSheet, Image, Alert, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { addSignUp, getSignUpsByEventId, deleteSignUp } from "../services/SignupService";
import { deleteEvent } from "../services/EventService";
import { getUserProfile } from "../services/UserService";


function EventDetailsScreen({ activeUser }) {
  const route = useRoute();
  const { event, city } = route.params;
  const [sign_ups, setSignups] = useState([]);
  const [availableSpaces, setAvailableSpaces] = useState(event ? event.capacity : 0);
  const currentUser = sign_ups.find((signUp) => signUp.userProfile.id === activeUser.activeUser[0].id);
  const isEventCreator = event.creator.id === activeUser.activeUser[0].id;
  const navigation = useNavigation()
  const Stack = createStackNavigator()



  useEffect(() => {
    const fetchSignUps = async () => {
      const json = await getSignUpsByEventId(event.id);
      setSignups(json);
      setAvailableSpaces(event.capacity - json.length)
    };

    fetchSignUps();
  }, [event?.id]);

  const handleSignUp = async () => {
    const signUp = {
      userProfile: { id: activeUser.activeUser[0].id },
      event: { id: event.id },
    };
    try {
        if (availableSpaces > 0) {
          const response = await addSignUp(signUp);
          setAvailableSpaces(Spaces => Spaces - 1);
          await updateSignUps();
        } else {
          Alert.alert('No available spaces', 'Sorry, there are no spaces available for this event.');
        }
      } catch (error) {
      console.error(error);
    }
  };

  const handleCancelAttendance = async () => {
    try {
      const userProfile = await getUserProfile(activeUser.activeUser[0].id); 
      const signUps = await getSignUpsByEventId(event.id);
      const signUp = signUps.find((signUp) => signUp.userProfile.id === userProfile.id);
      const response = await deleteSignUp(signUp.id);
      console.log(response);
      setAvailableSpaces(Spaces => Spaces + 1)
      await updateSignUps();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteEvent = async () => {
    Alert.alert(
        'Delete Event',
        'Are you sure you want to delete this event?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', style: 'destructive', onPress: async () => {
            try {
              // delete all sign-ups for the event
              const signUps = await getSignUpsByEventId(event.id);
              const promises = signUps.map(signUp => deleteSignUp(signUp.id));
              await Promise.all(promises);
              const response = await deleteEvent(event.id);
              navigation.goBack();
            } catch (error) {
              console.error('Error deleting event:', error);
            }
          } },
        ],
        { cancelable: false }
    );
  }

  const handleEditEvent = () => {
    navigation.navigate('Edit Event', { event, updateSignUps });
  };

  const updateSignUps = async () => {
    const json = await getSignUpsByEventId(event.id);
    setSignups(json);
    setAvailableSpaces(event.capacity - json.length)
  };


  const handleAttendeePress = (user) => {
    navigation.navigate('Attendee Details',{user : user});
  };

  return (

    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{ uri: event.creator.avatarUrl }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />
          <Text style={styles.createdBy}>
            Created By: {event.creator.displayName}
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.eventDetailsContainer}>
            <Text style={styles.eventTitle}>Event: {event?.title}</Text>
            <View style={styles.eventDetails}>
            <Text style={{fontSize: 16}}>Date: {event?.date}</Text>
            <Text style={{fontSize: 16}}>Time: {event?.time}</Text>
            <Text style={{fontSize: 16}}>Duration: {event?.duration}</Text>
            <Text style={{fontSize: 16}}>Description: {event?.description}</Text>
            <Text style={{fontSize: 16}}>Location: {event?.location.name}, {event.location.country.name}</Text>
            <Text style={{fontSize: 16}}>Meet-up Point: {event?.meetingPoint}</Text>
            <Text style={{fontSize: 16}}>Available Spaces: {event?.capacity - sign_ups.length}</Text>
            </View>
            <TouchableOpacity
              style={styles.eventButton}
              onPress={
                isEventCreator
                  ? handleDeleteEvent
                  : currentUser
                  ? handleCancelAttendance
                  : handleSignUp
              }>
              <Text style={styles.eventButtonTitle}>
                {isEventCreator
                  ? 'Delete Event'
                  : currentUser
                  ? 'Cancel Attendance'
                  : 'Sign Up'}
              </Text>
            </TouchableOpacity>
            <Button title="Edit Event" onPress={handleEditEvent} />
          </View>
        </View>
        <View style={styles.attendeesContainer}>
        <Text style={styles.attendeesHeaderText}>Attendees:</Text>
          {sign_ups.map((sign_up) => (
            <TouchableOpacity onPress={() => handleAttendeePress(sign_up)} key={sign_up.id} style={styles.attendeeContainer}>
              <Image
                source={{ uri: sign_up.userProfile.avatarUrl }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginLeft: 10,
                }}
              />

              <Text style={styles.attendeeName}>{sign_up.userProfile.displayName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#002060'
  },
  createdBy: {   
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  eventDetailsContainer: {
    marginLeft: 10,
  },
  eventTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventDetails: {
    marginVertical: 5,
    fontSize: 12,
  },
  attendeesHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  attendeesContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#002060',
    borderRadius: 10,
    padding: 10,
  },
  attendeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  attendeeName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventButton: {
    height: 30,
    backgroundColor: '#254C94',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
    width: 200,
  },
  eventButtonTitle: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
});

export default EventDetailsScreen;
