import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAg5jPD0Ts-458xcxhkFcR2F0ZaCPDnfno",
    authDomain: "e-copy-clone-challenge.firebaseapp.com",
    projectId: "e-copy-clone-challenge",
    storageBucket: "e-copy-clone-challenge.appspot.com",
    messagingSenderId: "2127718474",
    appId: "1:2127718474:web:0a4bc3b7cd272cf0f49eb3",
    measurementId: "G-Q215ET9L78"
  };
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db, auth};