import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddEventScreen from './AddEventScreen';

const Stack = createStackNavigator();

function CityDetails({ navigation }) {
  const route = useRoute();
  const { city } = route.params;

  const handleAddEventPress = () => {
    navigation.navigate('Add Event', { cityId: city.id });
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="City Details">
        {() => (
          <View>
            <Text>City name: {city.name}</Text>
            <Text>Country: {city.country.name}</Text>
            <TouchableOpacity onPress={handleAddEventPress}>
              <Text>Add Event</Text>
            </TouchableOpacity>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="Add Event" component={AddEventScreen} options={{ title: 'Add Event' }} />
    </Stack.Navigator>
  );
}

export default CityDetails;
