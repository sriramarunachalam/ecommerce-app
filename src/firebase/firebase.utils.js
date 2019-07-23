import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBqCTaCy0TPxiPnPVl96crFIz67vTzIrd0",
  authDomain: "crwn-db-7460a.firebaseapp.com",
  databaseURL: "https://crwn-db-7460a.firebaseio.com",
  projectId: "crwn-db-7460a",
  storageBucket: "",
  messagingSenderId: "22376470592",
  appId: "1:22376470592:web:4e808ae7d2f9b265"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
