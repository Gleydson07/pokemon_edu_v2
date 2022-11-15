import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUVM7AbEFOUHz4aMB2Y0ukcjktxoJtyQY",
  authDomain: "pokemon-edu-v2.firebaseapp.com",
  databaseURL: "https://pokemon-edu-v2-default-rtdb.firebaseio.com",
  projectId: "pokemon-edu-v2",
  storageBucket: "pokemon-edu-v2.appspot.com",
  messagingSenderId: "783380629524",
  appId: "1:783380629524:web:5d3c1da362937fe9b27f01",
  measurementId: "G-ZLEG648S1M"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };