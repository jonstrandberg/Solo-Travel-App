import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TimeSelector = (props) => {
    const [time, setTime] = useState(new Date('2023-03-18T10:00:00'));
    const [selectedTime, setSelectedTime] = useState(null)

    const onTimeSelected = (event, value) => {
        setTime(value);
    };

    const handleSelectTime = () => {
        const selectedTimeFormatted = new Date(time).
        toLocaleTimeString('en-US',{
            hour: "2-digit", 
            minute: "2-digit" 
        })
        setSelectedTime(selectedTimeFormatted)
        props.onAddStartTime && props.onAddStartTime(selectedTimeFormatted)
    }

    return (
        <View style={styles.MainContainer}>
            <DateTimePicker
                value={time}
                mode={'time'}
                minuteInterval={15}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={false}
                onChange={onTimeSelected}
                style={styles.timePicker}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleSelectTime}>Set Time</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    timePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
    button: {
        backgroundColor: '#0782F9',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 600
    }
});

export default TimeSelector
