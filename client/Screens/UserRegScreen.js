import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { addUserProfile } from "../services/UserService";

const UserRegScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [homeTown, setHomeTown] = useState('');
    const [nationality, setNationality] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState(null);
    const [interests, setInterests] = useState('');
    const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState(true);
    const [firebaseId, setFirebaseId] = useState('');

    const navigation = useNavigation();

    const handleRegistration = () => {
        if (!displayName || !avatarUrl || !homeTown || !nationality || !age || !interests) {
            Alert.alert('Error', 'All fields are required!')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('registered with: ', user.uid);
                setFirebaseId(user.uid);

                const userProfile = {
                    firebaseId: user.uid,
                    displayName,
                    avatarUrl,
                    homeTown,
                    nationality,
                    age,
                    location,
                    interests,
                };

                addUserProfile(userProfile)
                    .then(() => {
                        console.log('User Added Successfully');
                        navigation.navigate('Navigator');
                    })
                    .catch((error) => {
                        console.log(error);
                        Alert.alert('Error', 'Failed to add user');
                    });
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    Alert.alert(
                        `Error: the email you have entered is invalid\nPlease try again`
                    );
                } else if (error.code === 'auth/weak-password') {
                    Alert.alert(
                        `Error: invalid password\nThe password should be at least 6 characters\nPlease try again`
                    );
                } else if (error.code === 'auth/email-already-in-use') {
                    Alert.alert(
                        `Error: this email address is already in use\nPlease try again`
                    );
                } else {
                    Alert.alert(error.message);
                }
            });
    };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            {isRegistrationFormVisible && (
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text.toLocaleLowerCase())}
                        style={styles.input}
                        autoCorrect={false}
                        autoCompleteType='off'
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <TextInput
                        placeholder="Display Name"
                        value={displayName}
                        onChangeText={text => setDisplayName(text)}
                        style={styles.input}
                        autoCorrect={false}
                    />
                    <TextInput
                        placeholder="Avatar URL"
                        value={avatarUrl}
                        onChangeText={text => setAvatarUrl(text)}
                        style={styles.input}
                        autoCorrect={false}
                    />
                    <TextInput
                        placeholder="Hometown"
                        value={homeTown}
                        onChangeText={text => setHomeTown(text)}
                        style={styles.input}
                        autoCorrect={false}
                    />
                    <TextInput
                        placeholder="Nationality"
                        value={nationality}
                        onChangeText={text => setNationality(text)}
                        style={styles.input}
                        autoCorrect={false}
                    />
                    <TextInput
                        placeholder="Age"
                        value={age}
                        onChangeText={text => setAge(text)}
                        style={styles.input}
                        keyboardType='numeric'
                    />
                    <TextInput
                        placeholder="Interests"
                        value={interests}
                        onChangeText={text => setInterests(text)}
                        style={styles.input}
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleRegistration}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            )}
            {!isRegistrationFormVisible && (
                <View style={styles.inputContainer}>
                    <Text style={styles.successText}>You have successfully registered!</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleUserDetailCompletion}
                    >
                        <Text style={styles.buttonText}>Complete your profile</Text>
                    </TouchableOpacity>
                </View>
            )}
        </KeyboardAvoidingView>
    )
}

export default UserRegScreen


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
