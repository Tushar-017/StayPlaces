// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jwaLJeZydIyUumroBztJ3wTuCeV4PaM",
  authDomain: "travel-df87b.firebaseapp.com",
  projectId: "travel-df87b",
  storageBucket: "travel-df87b.appspot.com",
  messagingSenderId: "542134936612",
  appId: "1:542134936612:web:431b541b607d38d9ae24b1",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage()
