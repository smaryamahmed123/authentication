import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ0Cshh2-RNPOrnuIXVdaLi666MXWX4Fw",
  authDomain: "authenticauion.firebaseapp.com",
  projectId: "authenticauion",
  storageBucket: "authenticauion.appspot.com",
  messagingSenderId: "766865353485",
  appId: "1:766865353485:web:2aa876cf63e418bc4ade44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth}