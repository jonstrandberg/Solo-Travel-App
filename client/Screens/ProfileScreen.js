
import { useEffect, useState } from "react"
import { Image, View, Text, StyleSheet, TextInput, Button, ScrollView, SafeAreaView } from "react-native";
import {
    updateUserProfileName,
    updateUserProfileHomeTown,
    updateUserProfileNationality,
    updateUserProfileAge,
    updateUserProfileAvatarUrl,
    updateUserProfileLocation,
    getUserProfile,
    updateUserProfileInterests
} from "../services/UserService";
import SelectDropdownWithSearch from 'react-native-select-dropdown-with-search';
import { getCountries } from "../services/CountryService";
import { getLocations } from "../services/LocationService";



const placeholderImage = 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'

const ProfileScreen = (props) => {
    const [user, setUser] = useState();
    const [profile, setProfile] = useState([]);
    const [newName, setNewName] = useState("")
    const [newHomeTown, setNewHomeTown] = useState("")
    const [newNationality, setNewNationality] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newPhoto, setNewPhoto] = useState("")
    const [newLocation, setNewLocation] = useState("");
    const [newInterests, setNewInterests] = useState("")
    const [editingName, setEditingName] = useState("")
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingHomeTown, setIsEditingHomeTown] = useState(false);
    const [editingNationality, setEditingNationality] = useState(false);
    const [editingAge, setEditingAge] = useState(false);
    const [editingLocation, setEditingLocation] = useState(false);
    const [editingInterests, setEditingInterests] = useState(false)
    const [isSavingHomeTown, setIsSavingHomeTown] = useState(false);

    const [items, setItems] = useState([
        {label: 'Egypt', value: 'egypt'},
        {label: 'Scotland', value: 'scotland'}
    ]);

    useEffect(() => {
        getCountries()
        .then(data => { 
            setItems( data.map(x =>  x.name));
        })
    }, [])

    const activeUser = props.activeUser[0];

    useEffect(() => {
        getUserProfile(activeUser.id)
            .then(data => {
                setProfile(data);
            })
            .catch(error => console.log(error))
    }, [activeUser.id]);

    const handleUpdateName = async () => {
        const res = await updateUserProfileName(profile.id, newName);
        if (res) {
            setProfile({ ...profile, displayName: newName });
            setNewName("");
            setIsEditingName(false);
        }
    };

    const handleUpdateHomeTown = async () => {
        const res = await updateUserProfileHomeTown(profile.id, newHomeTown);
        if (res) {
            setProfile({ ...profile, homeTown: newHomeTown });
            setNewHomeTown("");
            setIsEditingHomeTown(false)
        }
    };

    const handleUpdateNationality = async () => {
        const res = await updateUserProfileNationality(profile.id, newNationality); // needs to have new Nationaility 
        if (res) {
            setProfile({ ...profile, nationality: newNationality });
            setNewNationality("");
            setEditingNationality(false)
        }
    };

    const handleUpdateAge = async () => {
        const res = await updateUserProfileAge(profile.id, newAge)
        if (res) {
            setProfile({ ...profile, age: newAge })
            setNewAge("")
            setEditingAge(false)
        }
    }

    const handleUpdateUserPhoto = async () => {
        const res = await updateUserProfileAvatarUrl(profile.id, newPhoto)
        if (res) {
            setProfile({ ...profile, avatarUrl: newPhoto })
            setNewPhoto("")
        }
    }

    const handleUpdateUserInterests = async () => {
        const res = await updateUserProfileInterests(profile.id, newInterests)
        if (res) {
            setProfile({ ...profile, interests: newInterests })
            setNewInterests("")
            setEditingInterests(false)
        }
    }

    const handleUpdateLocation = async () => {
        try {
            const updatedLocation = { ...profile.location, name: newLocation };
            const res = await updateUserProfileLocation(profile.id, updatedLocation);
            if (res) {
                setProfile({ ...profile, location: updatedLocation });
                setNewLocation("");
                setEditingLocation(false);
            }
        } catch (error) {
            console.log("Error updating user location: ", error);
        }
    };


    return (

        <View style={styles.container}>
            <Image
                source={{ uri: profile?.avatarUrl ? profile.avatarUrl : placeholderImage }}
                style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }}
            />
            <View style={styles.profileInfo}>
                <View style={styles.row}>
                </View>
            </View>
            <View style={styles.profileInfo}>
                <View style={styles.row}>
                    {editingName ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={newName}
                                onChangeText={(text) => setNewName(text)}
                            />
                            <Button
                                title="Save"
                                onPress={handleUpdateName}
                                style={styles.button}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.title}>{profile.displayName}</Text>
                            <Button
                                title="Edit"
                                onPress={() => setIsEditingName(true)}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Home town:</Text>
                <View style={styles.row}>
                    {isEditingHomeTown ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={newHomeTown}
                                onChangeText={(text) => setNewHomeTown(text)}
                            />
                            <Button
                                title="Save"
                                onPress={handleUpdateHomeTown}
                                style={styles.button}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.text}>{profile.homeTown}</Text>
                            <Button
                                title="Edit"
                                onPress={() => setIsEditingHomeTown(true)}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Nationality:</Text>
                <View style={styles.row}>
                    {editingNationality ? (
                        <>
                        <SelectDropdownWithSearch
                        data={items}
                        onSelect={(selectedNationality) => {
                            setNewNationality(selectedNationality)
                        }}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                    />
                    <Button
                                title="Save"
                                onPress={handleUpdateNationality}
                                style={styles.button}
                            />
                            </>
                    ) : (
                        <>
                            <Text style={styles.text}>{profile.nationality}</Text>
                            <Button
                                title="Edit"
                                onPress={() => setEditingNationality(true)}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Age:</Text>
                <View style={styles.row}>
                    {editingAge ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={newAge}
                                keyboardType="numeric"
                                onChangeText={(text) => setNewAge(text)}
                            />
                            <Button
                                title="Save"
                                onPress={handleUpdateAge}
                                style={styles.button}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.text}>{profile.age}</Text>
                            <Button
                                title="Edit"
                                onPress={() => setEditingAge(true)}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Interests:</Text>
                <View style={styles.row}>
                    {editingInterests ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={newInterests}
                                onChangeText={(text) => setNewInterests(text)}
                            />
                            <Button
                                title="Save"
                                onPress={handleUpdateUserInterests}
                                style={styles.button}
                            />
                        </>
                    ) : (
                        <>
                            <Text style={styles.text}>{profile.interests}</Text>
                            <Button
                                title="Edit"
                                onPress={() => setEditingInterests(true)}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Location:</Text>
                <View style={styles.row}>
                    {editingLocation ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={newLocation}
                                onChangeText={(text) => setNewLocation(text)}
                            />
                            <Button
                                title="Save"
                                onPress={handleUpdateLocation}
                                style={styles.button}
                            />
                        </>
                    ) : (
                        <>
                            {profile.location && profile.location.name ? (
                                <Text style={{ marginRight: 10 }}>
                                    {profile.location.name}
                                </Text>
                            ) : (
                                <Text style={{ marginRight: 10 }}>N/A</Text>
                            )}
                            <Button
                                title="Edit"
                                onPress={() => setEditingLocation(true)}
                                style={styles.button}
                            />
                        </>
                    )}
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F2F2F2',
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileInfo: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
        height: 40,
    },
    updateButton: {
        backgroundColor: '#FF9900',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
    },
    userContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
});

export default ProfileScreen