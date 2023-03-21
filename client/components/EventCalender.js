import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Calendar } from "react-native-calendars"

const EventCalendar = (props) => {
    const currentDate = new Date();
    const today = currentDate.toLocaleDateString("fr-CA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })

    const [marked, setMarked] = useState({ [today]: { selected: true } })
    const [selectedDate, setSelectedDate] = useState(null)

    const handleAddDate = () => {
        const selectedDateString = Object.keys(marked)[0];
        const selectedDateFormatted = new Date(selectedDateString).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
        setSelectedDate(selectedDateFormatted)
        props.onAddDate && props.onAddDate(selectedDateFormatted)
    }

    return (
        <View style={styles.container}>
            <Calendar
                current={today}
                minDate={today}
                maxDate={'2099-05-30'}
                onDayPress={day => {
                    const dateString = day.dateString;
                    setMarked({
                        [dateString]: { selected: true }
                    });
                    props.onDaySelect && props.onDaySelect(day)
                }}
                monthFormat={'MMMM yyyy'}
                onMonthChange={month => {
                    console.log('month changed', month)
                }}
                hideArrows={false}
                hideExtraDays={false}
                disableMonthChange={false}
                firstDay={1}
                markedDates={marked}
                theme={{
                    backgroundColor: 'transparent',
                    calendarBackground: 'transparent',
                    textSectionTitleColor: '#E0AC2E',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#E0AC2E',
                    selectedDayTextColor: '#254C94',
                    todayTextColor: '#0B909B',
                    dayTextColor: '#000',
                    textDisabledColor: '#8e8d94',
                    dotColor: '#0B909B',
                    // selectedDotColor: '#ffffff',
                    arrowColor: '#0B909B',
                    // disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#25242B',
                    // indicatorColor: 'blue',
                    // textDayFontFamily: 'ubuntu',
                    // textMonthFontFamily: 'ubuntu',
                    // textDayHeaderFontFamily: 'ubuntu',
                    // textDayFontWeight: '300',
                    // textMonthFontWeight: 'bold',
                    // textDayHeaderFontWeight: '300',
                    textDayFontSize: 18,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 14
                }}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddDate}>
                <Text style={styles.buttonText} >Set Date</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: 350
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
})



export default EventCalendar