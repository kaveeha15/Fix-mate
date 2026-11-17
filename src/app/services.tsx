import { ThemedView } from "@/components/themed-view";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Services = () => {
  return ( 
    <ThemedView>
      <SafeAreaView>
        <View><Text>Services</Text></View>
      </SafeAreaView>
    </ThemedView>
   );
}
 
export default Services;