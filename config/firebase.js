// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC1UH2g9UOWDXyVqsbx022DdVHHvKt_y1g",
    authDomain: "fir-23ecf.firebaseapp.com",
    projectId: "fir-23ecf",
    storageBucket: "fir-23ecf.appspot.com",
    messagingSenderId: "56533429045",
    appId: "1:56533429045:web:30737a2302034e028dfa7c",
    measurementId: "G-0W5VB71GSB"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


    