import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmqxRO4tSZby_swE2TO-5-Qwp7qKsCV-8",
  authDomain: "foodorder-19110.firebaseapp.com",
  projectId: "foodorder-19110",
  storageBucket: "foodorder-19110.firebasestorage.app",
  messagingSenderId: "869129923677",
  appId: "1:869129923677:web:bfe0699f50d23ebddeb1b4",
  measurementId: "G-84NFMBV1G0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);
const storage = getStorage(app); 
export { auth, db, storage }; 
