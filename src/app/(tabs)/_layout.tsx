import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name='index' options={{title:"Home"}}/>
            <Tabs.Screen name='request' options={{title:"Request"}}/>
        </Tabs>
      );
}
 
export default TabsLayout;