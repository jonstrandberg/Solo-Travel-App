import { useEffect, useState } from "react"
import { getEventsBookedByUserProfileId, getEvents } from "../services/EventService"


const MyEvents = () => {
    const navigation = useNavigation();
    const [userEvent, setUserEvent] = useState([])

    useEffect(() => {
        getEventsBookedByUserProfileId
        getUserEvents().then(json => {
            setEvent(json);
        });
    }, []);

    const handlePress = (event) => {
        navigation.navigate("EventDetails", { event });
    };

    const eventItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
            <Button title="Details" onPress={() => handlePress(item)} />
        </View>
    );


    return (
        <View>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default EventList;