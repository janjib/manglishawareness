import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWgf_EmjWODJRgxVBLCcKUZmdNxbNDmUM",
  authDomain: "manglishawareness.firebaseapp.com",
  projectId: "manglishawareness",
  storageBucket: "manglishawareness.appspot.com",
  messagingSenderId: "514936794204",
  appId: "1:514936794204:web:7489724f2c0b18e9414a99",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
