import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAV52gEkJWLMMXrUcN6pomwwTzR91EB8Hc",
    authDomain: "linkedin-clone-6a462.firebaseapp.com",
    projectId: "linkedin-clone-6a462",
    storageBucket: "linkedin-clone-6a462.appspot.com",
    messagingSenderId: "244058077452",
    appId: "1:244058077452:web:c11baf1f12718f4607b129"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };