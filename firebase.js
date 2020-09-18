import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCfr62u-Lr-faQxhyIJec8ZbzXG-o2X4bE",
    authDomain: "website-comments-da7a4.firebaseapp.com",
    databaseURL: "https://website-comments-da7a4.firebaseio.com",
    projectId: "website-comments-da7a4",
    storageBucket: "website-comments-da7a4.appspot.com",
    messagingSenderId: "480292792504",
    appId: "1:480292792504:web:2ddcf7a41b9dfdbff86c4d",
    measurementId: "G-MGKZM6DZTL"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase