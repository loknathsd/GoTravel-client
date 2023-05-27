import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcWxrH5nm6gn2XC4BT1fSz7lgqW_dRXkI",
    authDomain: "gotravel-3390a.firebaseapp.com",
    projectId: "gotravel-3390a",
    storageBucket: "gotravel-3390a.appspot.com",
    messagingSenderId: "543456663090",
    appId: "1:543456663090:web:651e14a5cbf85df9b3ce2b"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export {auth,provider}