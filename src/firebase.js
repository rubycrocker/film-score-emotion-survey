// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/database';
import {getFirestore} from "@firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkT3IblS1k8_0PDVrJeYPgm-fS2yCuU98",
  authDomain: "rubys-film-emotion-survey.firebaseapp.com",
  databaseURL: "https://rubys-film-emotion-survey-default-rtdb.firebaseio.com",
  projectId: "rubys-film-emotion-survey",
  storageBucket: "rubys-film-emotion-survey.appspot.com",
  messagingSenderId: "383167983289",
  appId: "1:383167983289:web:9d3cbff13aa8a59ad2b568",
  measurementId: "G-0D8NVB1H1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
//const analytics = getAnalytics(app);
