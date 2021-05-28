import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAOgoM_9irrEC_xWVinN0Dc_UUcicIm2Gc",
    authDomain: "evernote-clone-f1bf7.firebaseapp.com",
    projectId: "evernote-clone-f1bf7",
    storageBucket: "evernote-clone-f1bf7.appspot.com",
    messagingSenderId: "807238492202",
    appId: "1:807238492202:web:5db784d6ce0893ee616353"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase