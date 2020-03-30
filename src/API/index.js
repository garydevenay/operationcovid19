import firebase from 'firebase';
import { uuid } from 'uuidv4';
import  axios from 'axios';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
firebase.initializeApp(firebaseConfig);
firebase.auth().signInAnonymously();

const submissions = firebase.database().ref('submissions/');
const summary = firebase.database().ref('summary/');
// submissions.on('value', function(snapshot) {
//     firebase.database().ref('submissionCount/').once('value').then((snapshot) => {
//     })
// });

export function Save(obj) {
    let item = {
        ...obj,
        created: new Date()
    }

    firebase.database().ref(`submissions/${uuid()}`).set(item);
}

export async function GetCount() {
    let snapshot = await submissions.once('value');
    return snapshot.numChildren();
}

export function LiveCount(cb) {
    submissions.on('value', function(s) {
        cb(s.numChildren());
    });
}

export async function GetCountrySummary() {
    let snapshot = await summary.once('value');
    let value = snapshot.val();
    
    return firebaseToArray(value);
}

export async function GetSelfReports() {
    let snapshot = await submissions.once('value');
    let value = snapshot.val();

    return firebaseToArray(value);
}

export async function GetCasesByCountry(country) {
    let res = await axios.get(`https://api.covid19api.com/country/${country}/status/confirmed`);
    return res.data;
}

export async function GetSummary() {
    let res = await axios.get('https://api.covid19api.com/summary');
    return res.data;
}

function firebaseToArray(value) {
    let array = [];
    let keys = Object.keys(value);

    for(let i = 0; i < keys.length; i++) {
        let tmp = value[keys[i]];

        let val = {
            ...tmp,
            id: keys[i]
        }
        array[i] = val
    }

    return array;
}