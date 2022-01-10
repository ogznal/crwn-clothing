import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCEq213RIs9a4c3spUN1LGbfX9vuVS7nd4",
  authDomain: "crwn-db-e946f.firebaseapp.com",
  projectId: "crwn-db-e946f",
  storageBucket: "crwn-db-e946f.appspot.com",
  messagingSenderId: "753060278887",
  appId: "1:753060278887:web:f17988144379bcab531ac2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
