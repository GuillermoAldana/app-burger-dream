import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_APPAPIKEY,
  authDomain: process.env.REACT_FIREBASE_APPAUTHDOMAIN,
  projectId: process.env.REACT_FIREBASE_APPPROJECTID,
  storageBucket: process.env.REACT_FIREBASE_APPSTORAGEBUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_APPMESSAGINGSENDERID,
  appId: process.env.REACT_FIREBASE_APPAPPID,
  measurementId: process.env.REACT_FIREBASE_APPMEASUREMENTID
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

