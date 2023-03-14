import { useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';

const Home = ({ navigation }) => {
  const [location, setLocation] = useState([])

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = function () {
    fetch('http://127.0.0.1:8080/locations')
      .then(res => res.json())
      .then(json => {
        setLocation(json)
      })
  }

  return (
    <View>
      <FlatList
        data={location}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.name}, {item.country.name}</Text>}
      />
      <Header navigation={navigation} />
    </View>
  );
}

const Header = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>Home</Text>
      <Text onPress={() => navigation.navigate('Event')}>Event</Text>
    </View>
  );
};

export default Home