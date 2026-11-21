 import { Pressable, StyleSheet, Text, View } from 'react-native'
 

 interface TabBouttonProps { label:string,
    onPress:()=>void,
    onLongPress:()=>void,
    isFocused:boolean,
    routeName:string,
    routeKey:string,
    index:number,
    color:string
}

 const TabButton = ({
    label,
    onPress,
    onLongPress,
    isFocused,
    routeName,
    routeKey,
    index,
    color,
    
 }:TabBouttonProps) => {
   return (
    

        <Pressable style={styles.item} onPress={onPress}>
            <View></View>
            <Text style={[{color:color}]} >{label}</Text>
        </Pressable>

   )
 }
 

 const styles = StyleSheet.create({
  item:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:4
  }
 })
 export default TabButton