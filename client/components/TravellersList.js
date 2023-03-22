import { View, Text} from "react-native"

const TravellersList = (props) => {
    // <FlatList
    //     data={location}
    //     keyExtractor={(item, index) => index.toString()}
    //     numColumns={2}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity
    //         key={item.id}
    //         onPress={() => handleCityPress(item)}
    //         style={styles.box}
    //       >
    //         <ImageBackground source={{ uri: item?.imageUrl ? item.imageUrl : placeholderCitiyImage }} resizeMode="cover" style={styles.imageUrl}>
    //           <View style={styles.textWrapper}>
    //             <Text style={styles.title}>{item.name}, {item.country.name}</Text>
    //           </View>
    //         </ImageBackground>
    //       </TouchableOpacity>
    //     )}
    //     columnWrapperStyle={styles.columnWrapper}
    //   /> 

    console.log ('travellers slider', props)
    return (
        <View>
            <Text>People</Text>

        
        </View>
    )
}

export default TravellersList