import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCAJ8Vr_lT4qwhGm54UlmRgY5qmJlwVjgI",
  authDomain: "reactjs-escalab.firebaseapp.com",
  projectId: "reactjs-escalab",
  storageBucket: "reactjs-escalab.appspot.com",
  messagingSenderId: "279155342698",
  appId: "1:279155342698:web:1b9517c0863e036ed4b913"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage, firebase}