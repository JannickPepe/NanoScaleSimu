
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/*
 apiKey: "AIzaSyDjCNGhB6pOb6P13jGDiPYtgK1sf_AM6pA",
    authDomain: "contactcomponent.firebaseapp.com",
    projectId: "contactcomponent",
    storageBucket: "contactcomponent.appspot.com",
    messagingSenderId: "1068081744152",
    appId: "1:1068081744152:web:4a76103d0831f697c8f66d"
*/

// Setup initialized data
const firebaseConfig = {
    apiKey: "AIzaSyBBziqkqY2TPCUpPtmeH3b5ClyVwEAE3rA",
    authDomain: "nanoscale-simulations-website.firebaseapp.com",
    databaseURL: "https://nanoscale-simulations-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nanoscale-simulations-website",
    storageBucket: "nanoscale-simulations-website.appspot.com",
    messagingSenderId: "815290881500",
    appId: "1:815290881500:web:4487fdc3f148c07ccaab19",
    measurementId: "G-0VJ61PHLY7"
};

// Init firebase App
export const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);


