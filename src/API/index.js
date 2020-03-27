import firebase from 'firebase';
import { uuid } from 'uuidv4';

const firebaseConfig = {
    apiKey: "AIzaSyCM1D4KXihxMhW_uig59RLVk6RI_86jU_c",
    authDomain: "operation-covid-19.firebaseapp.com",
    databaseURL: "https://operation-covid-19.firebaseio.com",
    projectId: "operation-covid-19",
    storageBucket: "operation-covid-19.appspot.com",
    messagingSenderId: "774682336211",
    appId: "1:774682336211:web:8e7a6ec8473b9698d5ad26",
    measurementId: "G-S9JRY3W40P"
};

export function Save(obj) {
    firebase.initializeApp(firebaseConfig)
    firebase.database().ref(`submissions/${uuid()}`).set(obj);
}