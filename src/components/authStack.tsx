import { auth } from '@/services/firebase'
import { Stack, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'

const AuthStack = () => {

  const [firebaseUser, setFirebaseUser] = useState(null)
  const router = useRouter()

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setFirebaseUser(user)
    })
    //cleanup subscriptiom
    return unsubscribe

  }, [])

  useEffect(() => {
    if (firebaseUser) router.replace('/(tabs)')
    else if (!firebaseUser) router.replace('/')
  }, [firebaseUser])



  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='(tabs)' />
    </Stack>
  )
}

export default AuthStack