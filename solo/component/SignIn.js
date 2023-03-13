import React from "react";
import { auth } from "../firebase";
import { View, Text, Image, TouchableOpacity } from "react-native";
import firebase from "../firebase.js";
import { GoogleAuthProvider, signInWithRedirect } from "@react-native-firebase/auth";
import GoogleSignin from "../img/googlelogin.png"

const SignIn = () => {
  const [user] = useAuthState(auth);


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <>
      <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Home')}>Home</Text>
      <Text onPress={() => navigation.navigate('Event')}>Event</Text>
        <Text style={styles.title}>Welcome to Solo chat</Text>
        <Text style={styles.description}>
          Please sign in with your Google account to chat with with other solo
          travellers
        </Text>
        <TouchableOpacity style={styles.button} onPress={googleSignIn}>
        <Image
        style={styles.googleSignin}
        source={GoogleSignin}
        accessibilityLabel="google-sign-in"
        />
        </TouchableOpacity>
        </View>
    </>
  );
};

export default SignIn;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  }
}