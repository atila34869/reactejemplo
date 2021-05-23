import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqnJzNmMLORPQwmQ4knr60yBui3MjmfOI",
    authDomain: "reactejemplo-23fd7.firebaseapp.com",
    projectId: "reactejemplo-23fd7",
    storageBucket: "reactejemplo-23fd7.appspot.com",
    messagingSenderId: "596698268491",
    appId: "1:596698268491:web:5001b245970054d9ec9ece"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)