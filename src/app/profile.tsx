import { ThemedView } from "@/components/themed-view";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return ( 
        <ThemedView>
            <SafeAreaView>
                <View><Text>Profile</Text></View>
            </SafeAreaView>
        </ThemedView>
     );
}
 
export default Profile;