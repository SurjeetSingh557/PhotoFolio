import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCknsn4y3-bHzaIU7ewQHSJGgG1X58dl90",
    authDomain: "photofolio-1034c.firebaseapp.com",
    projectId: "photofolio-1034c",
    storageBucket: "photofolio-1034c.firebasestorage.app",
    messagingSenderId: "1062748015423",
    appId: "1:1062748015423:web:fbe668840fef160ebfe18a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
