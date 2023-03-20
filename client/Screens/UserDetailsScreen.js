import { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { auth } from "../firebase";

const UserDetailsScreen = () => {
    const [name, setName] = useState('')
    const [nationality, setNationality] = useState('')

    const navigation = useNavigation()

    const handleUserDetailCompletion = () => {
        navigation.navigate("Navigator")
    }

    return (
        <SafeAreaView
            style={styles.container}
            behaviour="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Nationality"
                    value={nationality}
                    onChangeText={text => setNationality(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleUserDetailCompletion}
                    style={[styles.button, styles.button]}
                >
                    <Text>Submit Details</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

export default UserDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
})