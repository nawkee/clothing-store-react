import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOS4VoTiONdd0CiI-GtLmPreaFJe4qSFs",
  authDomain: "clothing-store-react-9c42e.firebaseapp.com",
  projectId: "clothing-store-react-9c42e",
  storageBucket: "clothing-store-react-9c42e.appspot.com",
  messagingSenderId: "136917140207",
  appId: "1:136917140207:web:95e7bbaace1d51816cd11a",
  measurementId: "G-8ZJC6JBKYX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
