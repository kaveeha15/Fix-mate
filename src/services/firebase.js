
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyA52nyqP01XLQbD2CdpfyDXxy_ygqjzZA8",
  authDomain: "fix-mate-977a4.firebaseapp.com",
  projectId: "fix-mate-977a4",
  storageBucket: "fix-mate-977a4.firebasestorage.app",
  messagingSenderId: "196861227157",
  appId: "1:196861227157:web:d64afa1be4a7a0fd66eb9c"
};

const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app,{persistence:getReactNativePersistence(AsyncStorage)})