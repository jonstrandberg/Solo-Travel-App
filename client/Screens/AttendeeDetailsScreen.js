import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";
import UserProfileDetail from "../components/UserProfileDetails";

export const AttendeeDetailsScreen = () => {
    const route = useRoute();
    const { attendee, city } = route.params;
    const navigation = useNavigation();

    const placeholderImage = 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'

    const handleGoBackPress = () => {
        navigation.goBack()
    }

    console.log('attendee detail: ', attendee.userProfile)

    return (
        <SafeAreaView style={styles.container}>
            <Text>Attendee:</Text>
            {/* <Image
                source={{ uri: attendee.userProfile?.avatarUrl ? attendee.userProfile.avatarUrl : placeholderImage }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={styles.titleText}>{ attendee.userProfile.displayName}</Text>
            <Text style={styles.locationText}>Current Location: { attendee.userProfile.location.name}</Text>
            
            <Text style={styles.detailsText}>Home Town: { attendee.userProfile.homeTown}</Text>
            <Text style={styles.detailsText}>Nationality: { attendee.userProfile.nationaliy}</Text>
            <Text style={styles.detailsText}>Age: { attendee.userProfile.age}</Text>
            <Text style={styles.detailsText}>Interests { attendee.userProfile.interests}</Text> */}
            <View>{UserProfileDetail}</View>

            <TouchableOpacity onPress={() => handleGoBackPress()} style={styles.button}>
                <Text style={styles.buttonText}>Back to Event</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        marginTop: 10,
        fontSize: 30,
        fontWeight:700
    },
    locationText:{
        marginTop: 10,
        fontSize: 20,
        fontWeight:500
    },
    detailsText: {
        marginTop: 10,
        fontSize: 15
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#254C94',
        marginVertical: 5,
        paddingVertical: 6,
        paddingHorizontal: 20,
        width: '80%'
    },
    buttonText: {
        color: '#254C94',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
