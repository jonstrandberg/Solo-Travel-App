import { useRoute, useNavigation } from "@react-navigation/native";
import { Image, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import UserProfileDetail from "../components/UserProfileDetail";


const AttendeeDetailsScreen = () => {
    const route = useRoute();
    const { user, city } = route.params;
    const navigation = useNavigation();

    const handleGoBackPress = () => {
        navigation.goBack()
    }

    return (
        <ScrollView >
                <View style={styles.container}>
                <Text style={styles.titleText}>Attendee:</Text>
                <UserProfileDetail user={user.userProfile} />
                <TouchableOpacity onPress={() => handleGoBackPress()} style={styles.button}>
                    <Text style={styles.buttonText}>Back to Event</Text>
                </TouchableOpacity>
                </View>
        </ScrollView>
    )
}

export default AttendeeDetailsScreen

const styles = StyleSheet.create({
    container: {
        padding: 45,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
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
});

