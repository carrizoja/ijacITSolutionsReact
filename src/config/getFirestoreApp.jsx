// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG2m79SL3rDEvgCpZ46xWtirgqqioCFvU",
  authDomain: "ijacitsolutions.firebaseapp.com",
  projectId: "ijacitsolutions",
  storageBucket: "ijacitsolutions.appspot.com",
  messagingSenderId: "166046584303",
  appId: "1:166046584303:web:4b4a90cadf347144dafa1a",
  measurementId: "G-8NYPRQK16F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app;
}