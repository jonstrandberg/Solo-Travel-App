import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getEventsByLocationId } from "../services/EventService";
import AddEventScreen from './AddEventScreen';
import Header from '../components/Header';

const placeholderCitiyImage = 'https://media.istockphoto.com/photos/alberta-wilderness-near-banff-picture-id583809524?b=1&k=20&m=583809524&s=612x612&w=0&h=ZH0lrJI2ypyxvWQRtpwYcBFZoLLI4XdHWX5xP3JKkKQ='

const Stack = createStackNavigator()


function CityDetailsScreen({ navigation }) {

  const route = useRoute();
  const { city } = route.params;

  const [event, setEvent] = useState([])

  useEffect(() => {
    getEventsByLocationId(city.id)
      .then(json => {
        setEvent(json)
      })
  }, [event])



  const handleEventPress = (event) => {
    navigation.navigate('Event Details', { event: event, city: city });
  };

  const handleAddEventPress = () => {
    navigation.navigate('Add Event', { cityId: city.id });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{city.name}, {city.country.name}</Text>
      </View>
      <Image
        source={{ uri: city?.imageUrl ? city.imageUrl : placeholderCitiyImage }}
        resizeMode="cover"
        style={styles.imageUrl}
      />
      <View style={styles.eventListContainer}>
    <View style={styles.eventsHeaderContainer}>
    <Text style={styles.eventsHeaderText}>Events</Text>
    </View>
        <FlatList
          data={event}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleEventPress(item)} style={styles.eventContainer}>
              {/* <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} /> */}
              <Text style={styles.eventTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity onPress={handleAddEventPress} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerContainer: {
    backgroundColor: '#0B909B',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    top: 0,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  country: {
    fontSize: 16,
  },
  imageUrl: {
    width: '100%',
    height: 200,
  },
  eventListContainer: {
    width: '85%',
    alignSelf: 'center',
    paddingBottom: 2,
    marginBottom: 2,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  eventsHeaderText: {
    color: '#254C94',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#254C94',
    height: 40,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    lineHeight: 40,
    flex: 1,
  },
  eventsHeading: {
    color: '#254C94',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#254C94',
    paddingVertical: 5, 
    paddingHorizontal: 10, 
    borderRadius: 10,
    alignSelf: 'center', 
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default CityDetailsScreen;

