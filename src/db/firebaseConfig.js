
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Setup initialized data
const firebaseConfig = {
    apiKey: "AIzaSyDjCNGhB6pOb6P13jGDiPYtgK1sf_AM6pA",
    authDomain: "contactcomponent.firebaseapp.com",
    projectId: "contactcomponent",
    storageBucket: "contactcomponent.appspot.com",
    messagingSenderId: "1068081744152",
    appId: "1:1068081744152:web:4a76103d0831f697c8f66d"
};

// Init firebase App
export const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);


