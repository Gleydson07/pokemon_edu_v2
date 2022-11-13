import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUVM7AbEFOUHz4aMB2Y0ukcjktxoJtyQY",
  authDomain: "pokemon-edu-v2.firebaseapp.com",
  projectId: "pokemon-edu-v2",
  storageBucket: "pokemon-edu-v2.appspot.com",
  messagingSenderId: "783380629524",
  appId: "1:783380629524:web:248ec5c57b4bb447b27f01",
  measurementId: "G-2PZE75FZJT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };