// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE6q6eBa0jY9koU12OCcTph2ZxA3FVrjQ",
    authDomain: "read-mate.firebaseapp.com",
    projectId: "read-mate",
    storageBucket: "read-mate.appspot.com",
    messagingSenderId: "126214407385",
    appId: "1:126214407385:web:ddaa7ce3b3265135566ac8",
    measurementId: "G-VYSBTH19HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app)