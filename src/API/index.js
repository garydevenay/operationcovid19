import firebase from 'firebase';
import { uuid } from 'uuidv4';
import  axios from 'axios';

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

export async function GetCasesByCountry(country) {
    let res = await axios.get(`https://api.covid19api.com/country/${country}/status/confirmed`);
    return res.data;
}

export async function GetSummary() {
    let res = await axios.get('https://api.covid19api.com/summary');
    return res.data;
}