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

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>Hometown: {user.homeTown}</Text>
                <Text style={styles.detailsText}>Nationality: {user.nationality}</Text>
                <Text style={styles.detailsText}>Age: {user.age}</Text>
                <Text style={styles.detailsText}>Interests: {user.interests}</Text>
            </View>
        </View>
    )
}

export default UserProfileDetail

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    titleText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    locationText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    detailsContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
        marginLeft: 10
    },
    detailsText: {
        marginTop: 10,
        marginBottom: 6,
        fontSize: 15,
        textAlign: 'left'
    },
    boldDetailsText: {
        marginTop: 10,
        marginBottom: 6,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left'
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
});




