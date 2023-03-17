import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { addSignUp } from "../services/SignupService";
import { getUserProfile } from "../services/UserService";
function EventDetails() {
    const route = useRoute()
    const { event } = route.params
    // useEffect(() => {
    //     setUserProfile().then((json) => {
    //         setUser(json)
    //     })
    // }, [])
    const handleSignUp = async () => {
        // const userProfile = getUserProfile(1)
        const signUp = {
            userProfile: {
                id: 4
            },
            event: {
                id: event.id
            }
        }
        try {
            const response = await addSignUp(signUp);
            console.log(response); // Log the response from your API for debugging
            // Handle any success logic, e.g. show a success message
        } catch (error) {
            console.error(error); // Log any error for debugging
            // Handle any error logic, e.g. show an error message
        }
    };
    return (
        <View>
            <Text>Event: {event.title}</Text>
            <Text>Time: {event.time}</Text>
            <Text>Duration: {event.duration}</Text>
            <Text>Description: {event.description}</Text>
            <Text>Location: {event.location.name}, {event.location.country.name}</Text>
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    )
}
export default EventDetails
