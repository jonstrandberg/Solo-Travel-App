import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet, TextInput, Button } from "react-native";

const placeholderImage = 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'

export const Attendee = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.user?.avatarUrl ? props.user.avatarUrl : placeholderImage }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text style={styles.displayName}>{props.user.displayName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection:"row"
    },

    displayName: {
        marginTop: 10,
        fontSize: 15
        

    }
})
