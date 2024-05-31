// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,collection, getDocs} from "firebase/firestore";

const firebaseConfig = {

  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId:process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUGET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING,
  appId:process.env.NEXT_PUBLIC_APPID 
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


