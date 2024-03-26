import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import {getDatabase, getDatebase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA7vFKafM92rVpvpeJbsl2e2QOiQEnd1C0",
  authDomain: "rechat-85dcb.firebaseapp.com",
  projectId: "rechat-85dcb",
  storageBucket: "rechat-85dcb.appspot.com",
  messagingSenderId: "636201336445",
  appId: "1:636201336445:web:c81353067927488d0cbb14"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
