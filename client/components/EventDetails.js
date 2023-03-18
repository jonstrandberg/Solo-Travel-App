import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { addSignUp, getSignUpsByEventId, deleteSignUp } from "../services/SignupService";
import { getUserProfile } from "../services/UserService";
import { Attendee } from "./Attendee";

function EventDetails() {
  const route = useRoute();
  const { event } = route.params;
  const [sign_ups, setSignups] = useState([]);

  useEffect(() => {
    const fetchSignUps = async () => {
      const json = await getSignUpsByEventId(event.id);
      setSignups(json);
    };

    fetchSignUps();
  }, [event.id]);

  const handleSignUp = async () => {
    const signUp = {
      userProfile: { id: 4 },   // HARD CODED
      event: { id: event.id },
    };
    try {
      const response = await addSignUp(signUp);
      console.log(response);
      await updateSignUps();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelAttendance = async () => {
    try {
      const userProfile = await getUserProfile(4);
      const signUps = await getSignUpsByEventId(event.id);
      const signUp = signUps.find((signUp) => signUp.userProfile.id === userProfile.id);
      const response = await deleteSignUp(signUp.id);
      console.log(response);
      await updateSignUps();
    } catch (error) {
      console.error(error);
    }
  };

  const updateSignUps = async () => {
    const json = await getSignUpsByEventId(event.id);
    setSignups(json);
  };

  // New code: find the sign-up record for the current user in the sign_ups state
  const currentUser = sign_ups.find((signUp) => signUp.userProfile.id === 4); //HARD CODED

  return (
    <SafeAreaView>
      <View>
        <Text>Event: {event.title}</Text>
        <Text>Date: {event.date}</Text>
        <Text>Time: {event.time}</Text>
        <Text>Duration: {event.duration}</Text>
        <Text>Description: {event.description}</Text>
        <Text>
          Location: {event.location.name}, {event.location.country.name}
        </Text>
        <Text>Available Spaces: {event.capacity}</Text>
        {/* New code: render the Cancel Attendance button if the current user is signed up, otherwise render the Sign Up button */}
        {currentUser ? (
          <Button title="Cancel Attendance" onPress={handleCancelAttendance} />
        ) : (
          <Button title="Sign Up" onPress={handleSignUp} />
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

export default EventDetails;
