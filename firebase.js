// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFPO4L9ReykbDFXBPW8SsbwjXI4ZgFY0E",
  authDomain: "facebook-clone-4ddeb.firebaseapp.com",
  projectId: "facebook-clone-4ddeb",
  storageBucket: "facebook-clone-4ddeb.appspot.com",
  messagingSenderId: "93560674515",
  appId: "1:93560674515:web:5ff85e23766834ae3b1c26",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp
// get Apps & getApp for nextJS app only >> to initialize app only if there were no app

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
