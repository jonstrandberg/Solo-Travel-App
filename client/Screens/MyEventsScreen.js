import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getEventsBookedByUserProfileId, getEventsCreatedByUserProfileId } from "../services/EventService";
import EventDetailsScreen from "./EventDetailsScreen";
import EditEventScreen from "./EditEventScreen";

const Stack = createStackNavigator();

const MyEventsList = () => {
    const navigation = useNavigation();
    const [eventsAttending, setEventsAttending] = useState([]);
    const [eventsCreated, setEventsCreated] = useState([]);
    const [activeTab, setActiveTab] = useState("created");
    const currentUserId = 5     //HARD CODED


    useFocusEffect(
        React.useCallback(() => {
            Promise.all([
                getEventsBookedByUserProfileId(currentUserId),
                getEventsCreatedByUserProfileId(currentUserId)
            ])
            .then(([bookedEvents, createdEvents]) => {
                setEventsAttending(bookedEvents);
                setEventsCreated(createdEvents);
            })
            .catch((error) => {
                console.error("Error getting events:", error);
            });
        }, [])
    );

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
            {/* Display the events created and events attending tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveTab("created")} style={[styles.tabButton, activeTab === "created" && styles.activeTabButton]}>
                    <Text style={[styles.tabButtonText, activeTab === "created" && styles.activeTabButtonText]}>Events Created ({eventsCreated.length})</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("attending")} style={[styles.tabButton, activeTab === "attending" && styles.activeTabButton]}>
                    <Text style={[styles.tabButtonText, activeTab === "attending" && styles.activeTabButtonText]}>Events Attending ({eventsAttending.length})</Text>
                </TouchableOpacity>
            </View>
            {/* Display the events created */}
            {activeTab === "created" && eventsCreated.length > 0 && (
                <FlatList
                    data={eventsCreated}
                    renderItem={eventItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
            {/* Display the events attending */}
            {activeTab === "attending" && eventsAttending.length > 0 && (
                <FlatList
                    data={eventsAttending}
                    renderItem={eventItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const MyEventsScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Events List" component={MyEventsList} />
            <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
            <Stack.Screen name="Edit Event" component={EditEventScreen} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ccc",
    },
    activeTabButton: {
        backgroundColor: "#0B909B",
        borderColor: "#0B909B",
    },
    tabButtonText: {
        textAlign: "center",
        color: "#000",
        fontSize: 16,
    },
    activeTabButtonText: {
        color: "#fff",
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

