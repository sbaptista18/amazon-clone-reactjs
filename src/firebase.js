import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCq6y18822uC0DgBDOe3B3HRHqfBccmjyM",
    authDomain: "clone-9d83b.firebaseapp.com",
    databaseURL: "https://clone-9d83b.firebaseio.com",
    projectId: "clone-9d83b",
    storageBucket: "clone-9d83b.appspot.com",
    messagingSenderId: "221442838558",
    appId: "1:221442838558:web:8956aecda6e5c2cd051e0f",
    measurementId: "G-JFGN2865R0"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }