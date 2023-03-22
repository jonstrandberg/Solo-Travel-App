import { View, Text, TouchableOpacity} from "react-native"

const UserProfileDetail = (attendee) => {
    return (
        <View>
            <Text>Attendee:</Text>
            <Image
                source={{ uri: attendee.userProfile?.avatarUrl ? attendee.userProfile.avatarUrl : placeholderImage }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={styles.titleText}>{ attendee.userProfile.displayName}</Text>
            <Text style={styles.locationText}>Current Location: { attendee.userProfile.location.name}</Text>
            
            <Text style={styles.detailsText}>Home Town: { attendee.userProfile.homeTown}</Text>
            <Text style={styles.detailsText}>Nationality: { attendee.userProfile.nationaliy}</Text>
            <Text style={styles.detailsText}>Age: { attendee.userProfile.age}</Text>
            <Text style={styles.detailsText}>Interests { attendee.userProfile.interests}</Text>
        </View>
    )
}

export default UserProfileDetail