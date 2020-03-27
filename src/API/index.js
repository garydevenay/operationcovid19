import firebase from 'firebase';
import { uuid } from 'uuidv4';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

export function Save(obj) {
    firebase.initializeApp(firebaseConfig)
    firebase.database().ref(`submissions/${uuid()}`).set(obj);
}