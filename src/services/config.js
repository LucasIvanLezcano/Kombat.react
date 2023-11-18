import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB228aeCaIw9EECzqrY3wD-FVOulsgfyH8",
  authDomain: "tienda--kombat.firebaseapp.com",
  projectId: "tienda--kombat",
  storageBucket: "tienda--kombat.appspot.com",
  messagingSenderId: "162160953102",
  appId: "1:162160953102:web:8c7e27a23fe6ef05c3795f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);