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
        <View style={styles.MainContainer}>
            <DateTimePicker
                value={duration}
                mode={'time'}
                minuteInterval={15}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={false}
                onChange={onDurationSelected}
                style={styles.datePicker}
                date={new Date(new Date().setHours(0, 0, 0, 0))}
                locale='en_GB'
            />
            <TouchableOpacity style={styles.button} onPress={handleSelectDuration}>
                <Text style={styles.buttonText} >Set Duration</Text>
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
    datePicker: {
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

export default DurationSelector
