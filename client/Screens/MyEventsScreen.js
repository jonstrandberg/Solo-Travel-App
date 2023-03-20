import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { getEventsBookedByUserProfileId } from "../services/EventService";
import EventDetailsScreen from "./EventDetailsScreen";

const Stack = createStackNavigator();

const MyEventsList = () => {
    const navigation = useNavigation();
    const [eventsAttending, setEventsAttending] = useState([]);

    useEffect(() => {
        getEventsBookedByUserProfileId(1)
            .then((json) => {
                setEventsAttending(json);
            })
            .catch((error) => {
                console.error("Error getting events attended:", error);
            });
    }, []);

    const handlePress = (event) => {
        navigation.navigate("EventDetails", { event });
    };

    const eventItem = ({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)} style={styles.eventContainer}>
            <View style={styles.eventInfoContainer}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDate}>{item.date}</Text>
                <Text style={styles.eventTime}>{item.time}</Text>
            </View>
            <View style={styles.detailsButtonContainer}>
                <Text style={styles.detailsButtonText}>Details</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={eventsAttending}
                renderItem={eventItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const MyEventsScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Events List" component={MyEventsList} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    eventContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ccc",
        marginVertical: 10,
        padding: 10,
    },
    eventInfoContainer: {
        flex: 1,
        marginRight: 10,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    eventDate: {
        fontSize: 16,
        marginBottom: 3,
    },
    eventTime: {
        fontSize: 16,
    },
    detailsButtonContainer: {
        backgroundColor: "#0B909B",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    detailsButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default MyEventsScreen;

