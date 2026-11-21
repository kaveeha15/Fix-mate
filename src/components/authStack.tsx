import {auth} from '../services/firebase'
import { Stack, useRouter } from 'expo-router'
import { useState,useEffect } from 'react'

const AuthStack = () => {
//   const [user,setUser]=useState(null)
//   const router=useRouter()
// useEffect(()=>{
//   const unsub=auth.onAuthStateChanged((us)=>{
//     setUser(us)
//   })
//   return unsub
// },[])
// useEffect(()=>{
//   if(user){
//     router.replace('/(tabs)')
//   }else{
//     router.replace('/')
//   }
// },[user])

  return (
   <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='index'/>
     <Stack.Screen name='(tabs)'/>
   </Stack>
  )
}

export default AuthStack