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
        <View style={styleSheet.MainContainer}>
            <DateTimePicker
                value={time}
                mode={'time'}
                minuteInterval={15}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={false}
                onChange={onTimeSelected}
                style={styleSheet.datePicker}
            />
            <TouchableOpacity>
                <Text onPress={handleSelectTime}>Change Time</Text>
            </TouchableOpacity>

        </View>
    );
}

const styleSheet = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 6,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 25,
        color: 'red',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center'
    },
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },
});

export default TimeSelector
