import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from "react-native";

export const AttendeeDetailsScreen = () => {
    const route = useRoute();
    const { attendee, city } = route.params;
    const navigation = useNavigation();

    const placeholderImage = 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'

    const handleGoBackPress = () => {
        navigation.goBack()
    }

    console.log('attendee detail: ', attendee)

    return (
        <SafeAreaView style={styles.container}>
            <Text>Attendee</Text>
            {/* <Image
                source={{ uri: props.user?.avatarUrl ? props.user.avatarUrl : placeholderImage }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text style={styles.displayName}>{props.user.displayName}</Text> */}
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

    displayName: {
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
