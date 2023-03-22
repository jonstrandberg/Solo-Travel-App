import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { responsiveWidth, responsiveHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getEventsByLocationId } from "../services/EventService";
import { getLocation } from '../services/LocationService'
import { getUserProfilesByLocationId } from '../services/UserService';
import BottomDrawer from '../components/BottomDrawer';
import UsersList from '../components/UsersList';

const CityDetailsScreen = () => {
  const [city, setCity] = useState({ name: '', country: { name: '' } })
  const [event, setEvent] = useState([])
  const [usersInCity, setUsersInCity] = useState([])
  const [isCurrentUsersOpen, setIsCurrentUsersOpen] = useState(false)

  const placeholderCityImage = 'https://media.istockphoto.com/photos/alberta-wilderness-near-banff-picture-id583809524?b=1&k=20&m=583809524&s=612x612&w=0&h=ZH0lrJI2ypyxvWQRtpwYcBFZoLLI4XdHWX5xP3JKkKQ='

  const navigation = useNavigation();

  const route = useRoute();
  const cityId = route.params.cityId;

  useEffect(() => {
    getLocation(cityId)
      .then(json => setCity(json))
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      getEventsByLocationId(cityId)
        .then(json => {
          setEvent(json);
        });
    }, [navigation, cityId])
  );

  useEffect(() => {
    getUserProfilesByLocationId(cityId)
      .then(json => setUsersInCity(json))
  }, [])

  const handleEventPress = (event) => {
    navigation.navigate('Event Details', { event: event, city: city });
  };

  const handleAddEventPress = () => {
    navigation.navigate('Add Event', { cityId: city.id });
  };

  const handleOpenCurrentUsers = () => {
    setIsCurrentUsersOpen(true)
  }
  const handleCloseCurrentUsers = () => {
    setIsCurrentUsersOpen(false)
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>{city.name}, {city.country.name}</Text>
      </View>
      <Image source={{ uri: city?.imageUrl ? city.imageUrl : placeholderCityImage }} resizeMode="contain" style={styles.imageUrl}></Image>
      <TouchableOpacity style={styles.whoIsHereButton} onPress={handleOpenCurrentUsers}>
        <Text style={styles.buttonText}>Who's here!</Text>
      </TouchableOpacity>
      <BottomDrawer visible={isCurrentUsersOpen} onClose={handleCloseCurrentUsers}>
        <UsersList users={usersInCity}/>
      </BottomDrawer>
  
      <Text style={styles.eventsHeader}>Events</Text>
      <FlatList
        data={event}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleEventPress(item)} style={styles.eventButton}>
              <Text style={styles.eventTitle}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddEventPress}>
        <Text style={styles.buttonText}>Add Event</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0B909B',
    width: '100%',
    height: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    zIndex: 1,
  },
  country: {
    fontSize: 20,
    marginVertical: 10,
  },
  eventsHeader: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#254C94',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#254C94',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 40,
    width: responsiveWidth(50),
    alignSelf: 'center',
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
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  imageUrl: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  eventButton: {
    backgroundColor: 'white',
    paddingVertical: responsiveHeight(1),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#254C94',
    width: responsiveWidth(80),
  },
  eventTitle: {
    color: '#254C94',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  whoIsHereButton: {
    backgroundColor: '#E0AE0E',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 10,
    width: responsiveWidth(70),
    alignSelf: 'center',
  },
});


export default CityDetailsScreen;

