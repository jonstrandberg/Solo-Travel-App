import { useState, useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";


const UserRegScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("User Details")
            }
        })
        return unsubscribe
    }, [])

    const handleRegistration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("registered with: ", user.uid)
            })
            .catch((error) => {
                if(error.code === 'auth/invalid-email'){
                    Alert.alert(`Error: the email you have enetered is invalid\nPlease try again`)
                }
                else if (error.code === 'auth/weak-password'){
                    Alert.alert(`Error: invalid password\nThe password should be at least 6 characters\nPlease try again`)
                }
                else if (error.code === 'auth/email-already-in-use'){
                    Alert.alert(`Error: this email address is already in use\nPlease try again`)
                }
                else {
                    Alert.alert(error.message)
                }
            });
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behaviour="padding"
        >
            <View style={styles.logoContainer}>
                <Image source={require('../img/VLarge.png')} style={styles.logo} />
            </View>
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
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleRegistration}
                    style={[styles.button, styles.button]}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default UserRegScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#254C94'
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
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    
    buttonOutlineText: {
        color: '#0782F9',
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
