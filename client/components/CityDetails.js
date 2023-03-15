import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function CityDetails() {
  const route = useRoute();
  const { city } = route.params;

  return (
    <View>
      <Text>{city.name}</Text>
      <Text>{city.country.name}</Text>
    </View>
  );
}

export default CityDetails;