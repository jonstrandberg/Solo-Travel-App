import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { addSignUp } from "../services/SignupService";
import { getUserProfile } from "../services/UserService";

function EventDetails() {
    const route = useRoute();
    const { event } = route.params;
    const [userProfile, setUserProfile] = useState(null); // Change to null instead of []

    useEffect(() => {
        getUserProfile(1).then((json) => { 
        });
    }, []);

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const json = await getUserProfile();
                setUserProfile(json);
            } catch (error) {
                console.log("Error fetching user profile: ", error);
            }
        }

        fetchUserProfile();
    }, []);

    const handleSignUp = async () => {
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
    console.log(response); 
} catch (error) {
    console.error(error); 
}}

return (
    <View>
        <Text>Event: {event.title}</Text>
        <Text>Time: {event.time}</Text>
        <Text>Duration: {event.duration}</Text>
        <Text>Description: {event.description}</Text>
        <Text>Location: {event.location.name}, {event.location.country.name}</Text>
        <Button title="Sign Up" onPress={handleSignUp} />
    </View>
);

}

export default EventDetails;
