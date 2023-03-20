import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DurationSelector = (props) => {
    const [duration, setDuration] = useState(new Date(0));
    const [selectedDuration, setSelectedDuration] = useState(null)

    const onDurationSelected = (event, value) => {
        setDuration(value);
    };

    const handleSelectDuration = () => {
        const selectedDurationHour = new Date(duration).
            toLocaleTimeString('en-GB', {
                hour12: false,
                hour: "2-digit",
            })
        const selectedDurationMinute = new Date(duration).
            toLocaleTimeString('en-GB', {
                hour12: false,
                minute: "2-digit"
            })
        const selectedDurationFormatted = selectedDurationHour + "hr(s) " + selectedDurationMinute + "mins"
        setSelectedDuration(selectedDurationFormatted)
        props.onAddDuration && props.onAddDuration(selectedDurationFormatted)
    }

    return (
        <View style={styleSheet.MainContainer}>
            <DateTimePicker
                value={duration}
                mode={'time'}
                minuteInterval={15}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={false}
                onChange={onDurationSelected}
                style={styleSheet.datePicker}
                date={new Date(new Date().setHours(0, 0, 0, 0))}
                locale='en_GB'
            />
            <TouchableOpacity>
                <Text onPress={handleSelectDuration}>Set Duration</Text>
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

export default DurationSelector
