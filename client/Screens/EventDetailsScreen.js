import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { addSignUp, getSignUpsByEventId, deleteSignUp } from "../services/SignupService";
import { deleteEvent } from "../services/EventService";
import { getUserProfile } from "../services/UserService";

function EventDetailsScreen({ activeUser }) {
  const route = useRoute();
  const { event, city } = route.params;
  const [sign_ups, setSignups] = useState([]);
  const [availableSpaces, setAvailableSpaces] = useState(event.capacity);
  const currentUser = sign_ups.find((signUp) => signUp.userProfile.id === activeUser.activeUser[0].id);
  const isEventCreator = event.creator.id === activeUser.activeUser[0].id;
  const navigation = useNavigation()



  useEffect(() => {
    const fetchSignUps = async () => {
      const json = await getSignUpsByEventId(event.id);
      setSignups(json);
      setAvailableSpaces(event.capacity - json.length)
    };

    fetchSignUps();
  }, [event.id]);

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
              console.log(response);
              navigation.goBack();
            } catch (error) {
              console.error('Error deleting event:', error);
            }
          } },
        ],
        { cancelable: false }
    );
  }
  
  const updateSignUps = async () => {
    const json = await getSignUpsByEventId(event.id);
    setSignups(json);
    setAvailableSpaces(event.capacity - json.length)
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={{ uri: event.creator.avatarUrl }} style={{ width: 75, height: 75, borderRadius: 50, alignSelf: 'center', marginTop: 8 }} />
          <Text style={styles.createdBy}>Created By: {event.creator.displayName}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.eventDetailsContainer}>
            <Text style={styles.eventName}>Event: {event.title}</Text>
            <Text style={styles.eventDetails}>Date: {event.date}</Text>
            <Text style={styles.eventDetails}>Time: {event.time}</Text>
            <Text style={styles.eventDetails}>Duration: {event.duration}</Text>
            <Text style={styles.eventDetails}>Description: {event.description}</Text>
            <Text style={styles.eventDetails}>Location: {event.location.name}, {event.location.country.name}</Text>
            <Text style={styles.eventDetails}>Meet-up Point: {event.meetingPoint}</Text>
            <Text style={styles.eventDetails}>Available Spaces: {availableSpaces}</Text>
            {isEventCreator && <Button title="Delete Event" onPress={handleDeleteEvent} />}
            {!isEventCreator && currentUser ? (
              <Button title="Cancel Attendance" onPress={handleCancelAttendance} />
            ) : (
              !isEventCreator && <Button title="Sign Up" onPress={handleSignUp} />
            )}
          </View>
        </View>
        <Text style={styles.attendeesHeaderText}>Attendees:</Text>
        <View style={styles.attendeesContainer}>
          {sign_ups.map((sign_up) => (
            <View key={sign_up.id} style={styles.attendeeContainer}>
              <Image
              source={{ uri: sign_up.userProfile.avatarUrl }}
              style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }}
              />
              <Text style={styles.attendeeName}>{sign_up.userProfile.displayName}</Text>
            </View>
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
    borderColor: '#888',
  },
  createdBy: {   
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  eventDetailsContainer: {
    marginLeft: 10,
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventDetails: {
    marginVertical: 5,
  },
  attendeesHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
  attendeesContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#888',
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
});

export default EventDetailsScreen;
