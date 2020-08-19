import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuFm2LzBSUGwtbnhgc7mS3Q4Hf26HPOsA",
    authDomain: "kara-multiply.firebaseapp.com",
    databaseURL: "https://kara-multiply.firebaseio.com",
    projectId: "kara-multiply",
    storageBucket: "kara-multiply.appspot.com",
    messagingSenderId: "464692696195",
    appId: "1:464692696195:web:cf479b301b1e81d19c37b6",
    measurementId: "G-SEKM89KH0M"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;