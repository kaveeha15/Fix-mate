import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { View, Text } from 'react-native';
import { Color } from 'expo-router';
import { SearchBar } from 'react-native-screens';
import { services } from '../../constants/services';


function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroSection}>
          <Text style={styles.title} className='flex text-2xl font-bold'>All your services in one place</Text>
        </View>
        <View style={styles.searchBar} className='mx-5 flex items-center justify-center border-1 rounded-2xl h-10 w-100'>
          <Text className=' text-indigo-950'>Search for a service</Text>
        </View>
        <View className="flex-row m-5 justify-between items-center bg-indigo-950 rounded-2xl w-100 mx-5 p-5">

          <View className="flex-1 pr-2">
            <Text className="text-white text-xl font-bold">
              Smart Home Repair & Service Platform
            </Text>

            <Text className="text-white text-xs mt-3">
              Find trusted professionals for your home repair needs.
            </Text>
          </View>


          <View className="w-24 h-28 items-center justify-center">
            <Text className="text-white">Image</Text>
          </View>
        </View>
        <View className='flex-row justify-between'>
          <Text>What need fixing?</Text>
          <Text>See all</Text>
        </View>
        
         <View className="flex-row flex-wrap gap-2 m-5">
  {services.map((service) => (
    <View
      key={service}
      className="w-25 h-25 justify-center bg-purple-100 rounded-xl p-3 items-center"
    >
      <Text className="text-xs text-center">
        {service}
      </Text>
    </View>
  ))}
</View>
       <View className='flex-row p-5 w-100 h-30 mx-5  bg-indigo-950 rounded-2xl  justify-center items-center'>
       <View className='w-20 items-center justify-center'><Text className='text-white'>image</Text></View>
          <View className='flex-1'><Text className='text-white'>Verified Technicians Trusted & Professional</Text></View>
            <View className='w-20 items-center justify-center'><Text className='text-white'>image</Text></View>
        </View> 

      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    color: '#171466',
    flexDirection: 'row',
    margin: Spacing.two,
  },
  safeArea: {
    display: 'flex',
  },
  heroSection: {
    display: 'flex',
    margin: 20
  },
  title: {

    color: '#171466',
    fontFamily: 'bold'
  },
  searchBar: {
    display: 'flex',
    borderRadius: 10,
    borderStyle: 'solid',
    color: '#171466',
    fontSize: 6
  },
  box: {
    display: 'flex',
    backgroundColor: '#171466',
    height: 100,


    borderRadius: Spacing.three,
  },
});
