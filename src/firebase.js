import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Ap4y0uhs8MMkTb7NjUzAfScY7Mi0-T8",
  authDomain: "twitter-clone-efdcc.firebaseapp.com",
  projectId: "twitter-clone-efdcc",
  storageBucket: "twitter-clone-efdcc.appspot.com",
  messagingSenderId: "536488923473",
  appId: "1:536488923473:web:28e1a1bd3a4bb69e0cc370",
  measurementId: "G-CW3PC7LYXR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;