import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3a1r8CqkydVRjzxN1Y_zeKWLITAzkitE",
    authDomain: "clone-aa2cd.firebaseapp.com",
    databaseURL: "https://clone-aa2cd.firebaseio.com",
    projectId: "clone-aa2cd",
    storageBucket: "clone-aa2cd.appspot.com",
    messagingSenderId: "181545772984",
    appId: "1:181545772984:web:1e62e9b28fc933f8e6114d",
    measurementId: "G-1B1T0VZRTJ"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export { auth };