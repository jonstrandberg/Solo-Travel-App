import { Modal, View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

const BottomDrawer = ({ visible, onClose, children }) => {
    const windowHeight = Dimensions.get('window').height

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose} >
            <View style={[styles.drawer, { height: windowHeight * 0.75 }]}>
                <View style={{ flex: 0, width: '95%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 16 }}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: '#0B909B',
    height: 'windowHeight * 0.75'
},
})

export default BottomDrawer