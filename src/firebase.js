// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqMYsv4R8xB2nxbVWMyVEkAvb4zk0vb1E",
  authDomain: "todo-app-cp-a98d6.firebaseapp.com",
  projectId: "todo-app-cp-a98d6",
  storageBucket: "todo-app-cp-a98d6.appspot.com",
  messagingSenderId: "674582407399",
  appId: "1:674582407399:web:5b378328e8d42b8571da42",
  measurementId: "G-C5HWJBLL66",
});

const db = firebaseApp.firestore();

export default db;
