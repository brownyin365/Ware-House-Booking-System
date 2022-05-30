// // import firebase from 'firebase'
// import firebase from '@firebase/app'
// // import 'firebase/firestore'
// // import 'firebase/firebase-auth'
// // import 'firebase/storage'
// // require('firebase/firestore')
// // import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyA75onBOfVs-JltTM9YKzxHowlHpCqX6_8",
    authDomain: "warehouse-e20d4.firebaseapp.com",
    projectId: "warehouse-e20d4",
    storageBucket: "warehouse-e20d4.appspot.com",
    messagingSenderId: "66636778726",
    appId: "1:66636778726:web:e280475dde93ec84f83f27",
    measurementId: "G-9NBPDWCLM9"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(config);
const db = firebase.firestore();


export {fb,db}

