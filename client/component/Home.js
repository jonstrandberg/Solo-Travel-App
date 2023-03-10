import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

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
        renderItem={({ item }) => 
        <Text style={styles.itemBox}>{item.name}, {item.country.name}</Text>}/>
    </View>
  );
}


const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    color: 'white',
    backgroundColor: '#254C94',
    padding:20,
    margin:10,
  },
});

export default Home