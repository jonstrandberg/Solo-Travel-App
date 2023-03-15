import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

function EventDetails () {
    const route = useRoute()
    const {event} = route.params

    return (
        <View>
        <Text>Event: {event.title}</Text>
        <Text>Time: {event.time}</Text>
        <Text>Duration: {event.duration}</Text>
        <Text>Description: {event.description}</Text>
        <Text>Location: {event.location.name}, {event.location.country.name}</Text>
        </View>
    )

}

export default EventDetails