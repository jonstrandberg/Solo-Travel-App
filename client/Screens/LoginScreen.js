import { useState, useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from "react-native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Navigator")
            }
        })
        return unsubscribe
    }, [])
    // add if statement within this useEffect checking user login against user profiles and direct to add user detail screen if no associated user 


    const handleMoveToUserReg = () => {
        navigation.navigate("User Registration")
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("logged in with: ", user.email)
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    Alert.alert(`Error: the password you have enetered is incorrect\nPlease try again`)
                }
                else if (error.code === 'auth/user-not-found') {
                    Alert.alert(`Error: the user you have entered does not exist\nPlease try again`)
                }
                else if (error.code === 'auth/invalid-email') {
                    Alert.alert(`Error: the email you have enetered is invalid\nPlease try again`)
                }
                else {
                    Alert.alert(error.code)
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
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleMoveToUserReg}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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


