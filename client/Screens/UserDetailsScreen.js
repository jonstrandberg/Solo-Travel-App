import { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import firebase from 'firebase/app'
import { auth } from "../firebase"

const UserDetailsScreen = () => {
    const [uid, setUid] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [homeTown, setHomeTown] = useState('')
    const [nationality, setNationality] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState('')
    const [interests, setInterests] = useState('')

    const navigation = useNavigation()


    useEffect(() => {
        const user = auth.currentUser
        if (user) {
            setUid(user.uid)
        }
    }, [])

    const handleUserDetailCompletion = () => {
        console.log('UID:', uid)
        console.log('Name:', name)
        console.log('Avatar:', avatar)
        console.log('Home town:', homeTown)
        console.log('Nationality:', nationality)
        console.log('Age:', age)
        console.log('Location:', location)
        console.log('Interests:', interests)
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
                    placeholder="Profile photo url"
                    value={avatar}
                    onChangeText={text => setAvatar(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Home Town"
                    value={homeTown}
                    onChangeText={text => setHomeTown(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Nationality"
                    value={nationality}
                    onChangeText={text => setNationality(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Age"
                    value={age}
                    onChangeText={text => setAge(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Current Location"
                    value={location}
                    onChangeText={text => setLocation(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Interests"
                    value={interests}
                    onChangeText={text => setInterests(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleUserDetailCompletion}
                    style={[styles.button, styles.button]}
                >
                    <Text style={styles.buttonText}>Submit Details</Text>
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