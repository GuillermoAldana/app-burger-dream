import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD6rQpVX1PEGdlgJiSqYDPuTExflO3StmE",
  authDomain: "burgerdream-55719.firebaseapp.com",
  projectId: "burgerdream-55719",
  storageBucket: "burgerdream-55719.appspot.com",
  messagingSenderId: "1072609990593",
  appId: "1:1072609990593:web:e387af3a291339b8014140",
  measurementId: "G-9YF9FRL9DM"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    db,
    googleAuthProvider,
    firebaseConfig,
    
}

