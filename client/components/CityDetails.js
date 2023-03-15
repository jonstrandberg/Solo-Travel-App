import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function CityDetails() {
  const route = useRoute();
  const { city } = route.params;

  return (
    <View>
      <Text>City name: {city.name}</Text>
      <Text>Country: {city.country.name}</Text>
    </View>
  );
}

export default CityDetails;