import React, { useEffect, useState } from 'react';
import { Image, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import { getUserProfile } from "../services/UserService";

const backupImage = 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg';

const Profile = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        getUserProfile(3)
        .then(data => {
            setUser(data);
        })
        .catch(error => console.log(error))
    }, []);



    return (
        <View style={styles.container}>
            <Image
            source={{ uri: user?.avatarUrl?user.avatarUrl: backupImage}}
            style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center'}}
            />
            <Text style={styles.userProfileName}>User profile name: </Text>
            <Text style={styles.userProfileAge}>Age: </Text>
            <Text style={styles.userProfileHometown}>Hometown: </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    userProfileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userProfileAge: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    userProfileHometown: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default Profile;
