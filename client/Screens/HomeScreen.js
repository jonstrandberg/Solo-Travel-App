import { useEffect, useState } from "react"
import { StyleSheet, SafeAreaView, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import { getLocations } from "../services/LocationService"
import CityDetailsScreen from "./CityDetailsScreen"
import EventDetailsScreen from "./EventDetailsScreen"
import EditEventScreen from "./EditEventScreen";
import AddEventScreen from "./AddEventScreen"
import Header from "../components/Header"
import AttendeeDetailsScreen from "./AttendeeDetailsScreen"
import SingleUserDetailScreen from "./SingleUserDetailScreen"


const Stack = createStackNavigator()

const CitiesList = () => {
  const [location, setLocation] = useState([]);
  const navigation = useNavigation();

  const placeholderCitiyImage = 'https://media.istockphoto.com/photos/alberta-wilderness-near-banff-picture-id583809524?b=1&k=20&m=583809524&s=612x612&w=0&h=ZH0lrJI2ypyxvWQRtpwYcBFZoLLI4XdHWX5xP3JKkKQ='

  useEffect(() => {
    getLocations().then((json) => {
      setLocation(json);
    });
  }, []);

  const handleCityPress = (city) => {
    navigation.navigate('City Details', { cityId: city.id })
  };

  return (

    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Top Cities To Explore!</Text>
      </View>
      <FlatList
        data={location}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleCityPress(item)}
            style={styles.box}
          >
            <ImageBackground source={{ uri: item?.imageUrl ? item.imageUrl : placeholderCitiyImage }} resizeMode="cover" style={styles.imageUrl}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{item.name}, {item.country.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

const HomeScreen = (activeUser) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Explore Cities'
        children={() => <CitiesList activeUser={activeUser} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='City Details'
        children={() => <CityDetailsScreen activeUser={activeUser} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Event Details'
        children={() => <EventDetailsScreen activeUser={activeUser} />}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Add Event'
        children={() => <AddEventScreen activeUser={activeUser} />}
        options={{ title: 'Add Event', headerShown: false }}
      />
      <Stack.Screen
        name='Attendee Details'
        children={() => <AttendeeDetailsScreen activeUser={activeUser} />}
        options={{ title: 'Add Event', headerShown: false }}
      />
      <Stack.Screen
        name='Single User Detail'
        children={() => <SingleUserDetailScreen activeUser={activeUser} />}
        options={{ title: 'Add Event', headerShown: false }}
      />
      <Stack.Screen
        name="Edit Event"
        children={() => <EditEventScreen activeUser={activeUser} />}
        options={{ title: 'Edit Event', headerShown: false }} />

    </Stack.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#002060',
  },
  box: {
    width: '48%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#254C94',
    backgroundColor: 'rgba(256, 256, 256, 0.65)',
    textAlign: 'center'


  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  titleContainer: {
    backgroundColor: '#0B909B',
    width: '100%',
    marginTop: 5,
    marginBottom: 10
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    zIndex: 1,
    alignContent: 'center',

  },
  imageUrl: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', // or 'stretch'
    width: '100%',
    height: '100%',
    overlayColor: 'white'
  },
  textWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1,
    overflow: 'hidden'
  }
})

export default HomeScreen;