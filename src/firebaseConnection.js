import{ initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMnB3os-Cxnvu0NchDPpMfcGkBopOcAfw",
  authDomain: "curso-fcfa0.firebaseapp.com",
  projectId: "curso-fcfa0",
  storageBucket: "curso-fcfa0.appspot.com",
  messagingSenderId: "696945469814",
  appId: "1:696945469814:web:85e9904938144a7764f257",
  measurementId: "G-SB2RVWJ1WQ"
};


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)

  export {db, auth};