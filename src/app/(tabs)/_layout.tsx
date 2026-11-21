import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen name='index' options={{ title: "Home" }} />
            <Tabs.Screen name='request' options={{ title: "Request" }} />
        </Tabs>
    );
}

export default TabsLayout;