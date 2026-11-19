import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name='profile' options={{title:"Profile"}}/>
               <Tabs.Screen name='request' options={{title:"Request"}}/>
        </Tabs>
      );
}
 
export default TabsLayout;