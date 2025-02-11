import { initializeApp, getApps } from "firebase/app";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  // apiKey: "AIzaSyBfEyfpR6i8TkKKfQ36lpMbFuczk7Ouhl4",
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL,
};
// initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();

// firebaseInit.ts
export default !getApps().length.length ? app : firebase.app();
