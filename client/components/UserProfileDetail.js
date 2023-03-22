import { View, Text, Image, StyleSheet } from "react-native"

const UserProfileDetail = (props) => {
    const placeholderImage = 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'

    const user = props.user

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: user?.avatarUrl ? user.avatarUrl : placeholderImage }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={styles.titleText}>{user.displayName}</Text>
            <Text style={styles.locationText}>Current Location: {user.location.name}</Text>

            <Text style={styles.detailsText}>Home Town: {user.homeTown}</Text>
            <Text style={styles.detailsText}>Nationality: {user.nationaliy}</Text>
            <Text style={styles.detailsText}>Age: {user.age}</Text>
            <Text style={styles.detailsText}>Interests {user.interests}</Text>
        </View>
    )
}

export default UserProfileDetail

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 700
    },
    locationText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 500
    },
    detailsText: {
        marginTop: 10,
        fontSize: 15
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
})