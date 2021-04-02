import firebase from "firebase/app"
import "firebase/auth"
import firestore from "firebase/firestore"

 export const app = firebase.initializeApp({
    apiKey: "AIzaSyCpapP_5i4HXcUGgzFacVVd5QE-SQnXwZs",
  authDomain: "bittracker-api.firebaseapp.com",
  databaseURL: "https://bittracker-api-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bittracker-api",
  storageBucket: "bittracker-api.appspot.com",
  messagingSenderId: "746411061565",
  appId: "1:746411061565:web:455a07e32b7f3b0eb79554"
})

export const auth = app.auth()
export const db = firebase.firestore()




