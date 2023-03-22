import { useRoute } from "@react-navigation/native";
import { Text, View, SafeAreaView} from "react-native"
import { ScrollView } from "react-native-gesture-handler";
import UserProfileDetail from "../components/UserProfileDetail";

const singleUserDetailScreen = () => {
    const route = useRoute ();
    const user = route.params.user

    console.log('single user is', user)
    return (
        <ScrollView>
            <UserProfileDetail user={user}/>
        </ScrollView>
    )
}

export default singleUserDetailScreen