import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text } from "react-native";

const Booking = () => {
    return (
          <ThemedView >
              <SafeAreaView >
                <View>
                    <Text>Booking</Text>
                </View>
              </SafeAreaView>
              </ThemedView>
      );
}
 
export default Booking;