import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyDpsM6l_NXAakeq2udlheEdvuTv92fmTNk",
    authDomain: "crown-db-17014.firebaseapp.com",
    databaseURL: "https://crown-db-17014.firebaseio.com",
    projectId: "crown-db-17014",
    storageBucket: "crown-db-17014.appspot.com",
    messagingSenderId: "973158806735",
    appId: "1:973158806735:web:c6459a3ac8afb5e66c33ba",
    measurementId: "G-HYJL74W8CG"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;