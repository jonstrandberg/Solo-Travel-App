import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
          <View style={styles.container}>
            <Text style={styles.cityName}>City name: {city.name}</Text>
            <Text style={styles.country}>Country: {city.country.name}</Text>
            <TouchableOpacity style={styles.button} onPress={handleAddEventPress}>
              <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="Add Event" component={AddEventScreen} options={{ title: 'Add Event' }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  country: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#254C94',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CityDetails;





