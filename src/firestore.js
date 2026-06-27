// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCYOXLW-aiL3_F_PmdxY-2t-oORnR5NIQw",
    authDomain: "master-class-b3263.firebaseapp.com",
    projectId: "master-class-b3263",
    // storageBucket: "master-class-b3263.appspot.com",
    messagingSenderId: "434302510724",
    appId: "1:434302510724:web:5a3cc2ba75cdf2680444d1",
    measurementId: "G-FTXX6VLQ7X"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
// export const storage = getStorage(app);