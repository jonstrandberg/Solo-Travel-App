// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import '@react-native-firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRf5KJxauOKLy3dPP1P41ZTKBS0E51zAs",
  authDomain: "solo-48566.firebaseapp.com",
  projectId: "solo-48566",
  storageBucket: "solo-48566.appspot.com",
  messagingSenderId: "538991376809",
  appId: "1:538991376809:web:e3e3541eb4bb3da8012cb8",
  measurementId: "G-BB840VFQNM"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

// Initialize Firebase Authentication and get a reference to the service