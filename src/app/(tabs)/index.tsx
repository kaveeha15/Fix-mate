import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { services } from "../../../constants/services";
import { useRouter} from "expo-router";


const Home = () => {
  const navigate=useRouter()
  const handlePress=()=>{
    navigate.navigate('/')
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>All your service in one place</Text>
      </View>
      <View style={styles.searchBar} className=" border-1 border-indigo-950">
        <Text style={styles.search}>Search for a service</Text>
      </View>
      <View style={styles.box}>
        <View className="flex-1">
          <Text style={styles.box1Text}>Smart Home Repair & Service Platform</Text>
          <Text style={styles.box1Text2}>Find trusted professionals for your home repair needs.</Text>
        </View>
        <View >
          <Text className="w-30 h-20">image</Text>
        </View>
      </View>
      <View style={styles.box2}>
        <Text className="text-indigo-950">What needs fixing?</Text>
        <Text className="text-indigo-950">See all</Text>
      </View>
      <View style={styles.services}>
        {
          services.map((service) => (
        
             <View key={service} style={styles.list}  ><TouchableOpacity onPress={()=>handlePress()}><Text>{service}</Text></TouchableOpacity></View>
        ))}
      </View>
      <View style={styles.box3}>
        <Text className="text-white">image</Text>
        <Text className=" w-60 text-white">Verified Technicians Trusted & Professional</Text>
        <Text className="text-white">image</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
    paddingTop:20
  },
  title: {
    color: '#141F66',
    fontWeight: 'bold',
    fontSize: 25
  },
  searchBar: {
    display: 'flex',
    outline: " 1px solid black",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width:'100px'
  },
  search: {
    fontSize: 15,
    color: '#141F66'
  },
  box: {
    backgroundColor: '#141F66',
    margin: 20,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    borderRadius:10,
    width:'100px'
  },
  box1Text: {
    color: 'white',
    fontSize:25
  },
  box1Text2: {
    color: 'white',
    fontSize:15
  },
  box2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    margin:20
  },
  services: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:10,
    padding:10,
    gap:15
  },
  list: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:85,
    backgroundColor:'#E0DFFB',
    cursor:'pointer',
    height: 80,
    borderRadius:10,
    
  },
  box3:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#141F66',
    borderRadius:10,
    width:'100px',
    margin:20,
    padding:40,
    gap:10
  }

})
export default Home;

