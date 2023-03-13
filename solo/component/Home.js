import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View>
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