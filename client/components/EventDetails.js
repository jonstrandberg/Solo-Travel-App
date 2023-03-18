import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList,SafeAreaView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { addSignUp, getSignUpsByEventId } from "../services/SignupService";
import { getUserProfile } from "../services/UserService";
import {Attendee} from "./Attendee";

function EventDetails() {
    const route = useRoute()
    const { event } = route.params

    const [sign_ups, setSignups] = useState([]);

useEffect(() => {
    getSignUpsByEventId(event.id).then(json => {
        console.log(json)
        setSignups(json);
        })
    }, []);

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
        <SafeAreaView>
        <View>
            <Text>Event: {event.title}</Text>
            <Text>Time: {event.time}</Text>
            <Text>Duration: {event.duration}</Text>
            <Text>Description: {event.description}</Text>
            <Text>Location: {event.location.name}, {event.location.country.name}</Text>
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
        <Text >Attendees: </Text>
        <FlatList data={sign_ups} keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
            <Attendee user={item.userProfile}></Attendee>
        )}

        >

        </FlatList>
        </SafeAreaView>
    )
}
export default EventDetails
