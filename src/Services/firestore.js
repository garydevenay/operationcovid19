
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Questionnaire } from "../Screens/Questionnaire";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};

export const createQuestionnaire = async (submission) => {
  let userCredential = await authenticateAnonymously();
  return db.collection('submissions')
  .add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    userId: userCredential.user.displayName,
    submission: submission
  })
}
