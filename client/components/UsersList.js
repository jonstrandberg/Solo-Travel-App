import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from "react-native"
import { useNavigation } from "@react-navigation/native"

const UsersList = ( props ) => {
    const navigation = useNavigation()
    
    const handleOnUserPress = (user) => {
      // navigation.navigate('Single User Detail', {user: user})
    }

    const users = props.users

    return (
        <View>
            <Text>People</Text>
            <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity onPress={() => handleOnUserPress(item)} key={item.id} style={styles.attendeeContainer}>
                            <Image
                                source={{ uri: item.avatarUrl }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    marginLeft: 10,
                                }}
                            />

                            <Text style={styles.attendeeName}>{item.displayName}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}

export default UsersList

const styles = StyleSheet.create({
    container: {
      margin: 10,
      marginTop: 20,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#002060'
    },
    createdBy: {   
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 10,
      marginBottom: 5,
    },
    eventDetailsContainer: {
      marginLeft: 10,
    },
    eventTitle: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    eventDetails: {
      marginVertical: 5,
      fontSize: 12,
    },
    attendeesHeaderText: {
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 10,
      marginBottom: 5,
      marginLeft: 10,
    },
    attendeesContainer: {
      marginTop: 10,
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: '#002060',
      borderRadius: 10,
      padding: 10,
    },
    attendeeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    attendeeName: {
      marginLeft: 12,
      fontSize: 16,
      fontWeight: 'bold',
    },
    eventButton: {
      height: 30,
      backgroundColor: '#254C94',
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 30,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      marginTop: 10,
      width: 200,
    },
    eventButtonTitle: {
      color: 'white',
      fontSize: 14,
      paddingHorizontal: 5,
      fontWeight: 'bold',
    },
  });