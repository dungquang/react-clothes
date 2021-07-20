import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCu7ZWlqU_kNH52xwVleNMjQTPrWVF950I",
    authDomain: "crwn-db-339d4.firebaseapp.com",
    projectId: "crwn-db-339d4",
    storageBucket: "crwn-db-339d4.appspot.com",
    messagingSenderId: "151999023040",
    appId: "1:151999023040:web:5923111b830469f4156a25",
    measurementId: "G-JL9QWQ0Q2L"
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;