import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC45pW1WDmEzhKZpeKk3jHoH9eeP1G4QCo",
  authDomain: "vueappinfomation.firebaseapp.com",
  projectId: "vueappinfomation",
  storageBucket: "vueappinfomation.appspot.com",
  messagingSenderId: "552832736084",
  appId: "1:552832736084:web:e7434b92c362a6516c06c1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const personalRef = collection(db, 'personals');
export default personalRef;
