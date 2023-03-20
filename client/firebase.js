import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhHJzoU0j2Ng5JnhebP0gJkKiYAafsJ7I",
    authDomain: "solo-travel-app-45e53.firebaseapp.com",
    projectId: "solo-travel-app-45e53",
    storageBucket: "solo-travel-app-45e53.appspot.com",
    messagingSenderId: "329747970268",
    appId: "1:329747970268:web:a9f27b98a531e3ca945c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }