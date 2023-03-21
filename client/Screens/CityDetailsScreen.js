import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getEventsByLocationId } from "../services/EventService";
import AddEventScreen from './AddEventScreen';

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
    <Stack.Navigator>
      <Stack.Screen name="Single City Details"
      options={{ headerShown: false }}>
        {() => (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{city.name}, {city.country.name}</Text>
            </View>    
            <Image source={{uri: city?.imageUrl ? city.imageUrl : placeholderCitiyImage}} resizeMode="contain" style={styles.imageUrl}></Image>
            <Text style={styles.eventsHeader}>Events</Text>
            <FlatList
              data={event}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleEventPress(item)} style={styles.eventButton}>
                  <Text style={styles.eventTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddEventPress}>
              <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="Add Event" component={AddEventScreen} options={{ title: 'Add Event', headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  header: {
    backgroundColor: '#0B909B',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 1,
  },
  country: {
    fontSize: 20,
    marginVertical: 10,
  },
  eventsHeader: {
    fontSize: 22,
    fontWeight: 'bold', 
    marginBottom: 10,
    color:'#254C94',
  },
  button: {
    backgroundColor: '#254C94',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  imageUrl: {
    width: '100%',
    aspectRatio: 4/3, 
  },
  eventButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#254C94',
    marginVertical: 5,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  eventTitle: {
    color: '#254C94',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default CityDetailsScreen;

