import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet, Image, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { addSignUp, getSignUpsByEventId, deleteSignUp } from "../services/SignupService";
import { deleteEvent } from "../services/EventService";
import { getUserProfile } from "../services/UserService";
import { Attendee } from "../components/Attendee";

function EventDetailsScreen() {
  const route = useRoute();
  const { event } = route.params;
  const [sign_ups, setSignups] = useState([]);
  const [availableSpaces, setAvailableSpaces] = useState(event.capacity);
  const currentUser = sign_ups.find((signUp) => signUp.userProfile.id === 5); //HARD CODED
  const isEventCreator = event.creator.id === 5; //HARD CODED
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
      userProfile: { id: 5 },   // HARD CODED
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
      const userProfile = await getUserProfile(5);  // HARD CODED
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
    navigation.navigate('Explore');
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
      <View>
        <Text>Created By: {event.creator.displayName}</Text>
        <Image source={{uri: event.creator.avatarUrl}}
        style={{ width: 75, height: 75, borderRadius: 50, alignSelf: 'center' }} />
        <Text>Event: {event.title}</Text>
        <Text>Date: {event.date}</Text>
        <Text>Time: {event.time}</Text>
        <Text>Duration: {event.duration}</Text>
        <Text>Description: {event.description}</Text>
        <Text>
          Location: {event.location.name}, {event.location.country.name}
        </Text>
        <Text>Meet-up Point: {event.meetingPoint}</Text>
        <Text>Available Spaces: {availableSpaces}</Text>
        {isEventCreator && (
          <Button title="Delete Event" onPress={handleDeleteEvent} />
        )}
        {!isEventCreator && currentUser ? (
          <Button title="Cancel Attendance" onPress={handleCancelAttendance} />
        ) : (
          !isEventCreator && <Button title="Sign Up" onPress={handleSignUp} />
        )}
      </View>
      <Text>Attendees: </Text>
      <FlatList
        data={sign_ups}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Attendee user={item.userProfile} />}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
    avatar: {
      width: 50,
      height: 50
    }
  });

export default EventDetailsScreen;
