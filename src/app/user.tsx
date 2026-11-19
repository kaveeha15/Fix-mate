import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const User = () => {
    const navigate=useRouter()
    const handlePress=(h)=>{
        navigate.navigate(h)
    }
    return (
        <SafeAreaView>
            <View className='flex flex-row gap-5 items-center w-100 m-10 rounded-2xl bg-slate-400 justify-center p-10'>
                <View className='bg-blue-400 rounded-2xl p-2'><TouchableOpacity onPress={()=>handlePress('/service-providers/')}><Text>Service Provider</Text></TouchableOpacity></View>
                  <View className='bg-blue-400 rounded-2xl p-2'><TouchableOpacity onPress={()=>handlePress('/service-takers/')}><Text>Service Taker</Text></TouchableOpacity></View>
                   <View className='bg-blue-400 rounded-2xl p-2'><TouchableOpacity  onPress={()=>handlePress('/(tabs)/request')}><Text>Tabs</Text></TouchableOpacity></View>
                  
            </View>
        </SafeAreaView>

    )
}

export default User