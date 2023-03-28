import { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, Image} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { addUserProfile } from "../services/UserService"
import { auth } from "../firebase"

const UserDetailsScreen = () => {
    const [firebaseId, setFirebaseId] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [homeTown, setHomeTown] = useState('')
    const [nationality, setNationality] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState(null)
    const [interests, setInterests] = useState('')

    const navigation = useNavigation()


    useEffect(() => {
        const user = auth.currentUser
        if (user) {
            setFirebaseId(user.uid)
        }
    }, [])

    const handleUserDetailCompletion = () => {
        if (!firebaseId || !displayName || !avatarUrl || !homeTown || !nationality || !age || !interests) {
            Alert.alert('Error', 'All fields are required!')
            return
        }
        const userProfile = {
            firebaseId,
            displayName,
            avatarUrl,
            homeTown,
            nationality,
            age,
            location,
            interests
        }
        addUserProfile(userProfile)
            .then(() => {
                console.log('User Added Succesfully');
                navigation.navigate("Navigator")
            })
            .catch(error => {
                console.log(error);
                Alert.alert('Error', 'Failed to add user');
            });
    }


    return (
        <SafeAreaView
            style={styles.container}
            behaviour="padding"
        >
            <View style={styles.logoContainer}>
                <Image source={require('../img/VLarge.png')} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.regText}>Complete Your Registration</Text>
                <TextInput
                    placeholder="Name"
                    value={displayName}
                    onChangeText={text => setDisplayName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Profile photo url"
                    value={avatarUrl}
                    onChangeText={text => setAvatarUrl(text)}
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
                    keyboardType="numeric"
                    onChangeText={text => setAge(text)}
                    style={styles.input}
                />
                {/* <TextInput
                    placeholder="Current Location"
                    value={location}
                    onChangeText={text => setLocation(text)}
                    style={styles.input}
                /> */}
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
        alignItems: 'center',
        backgroundColor: '#254C94'
    },
    regText:{
        color:'#FFF',
        fontWeight: 600,
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        height: 50,
        width: '95%',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: '#BDBDBD',
        backgroundColor: 'white',
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
        fontSize: 18
    },
    logoContainer: {
        backgroundColor: '#254C94',
        paddingTop: 6,
        paddingBottom: 40,
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
    }
})