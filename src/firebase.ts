// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'e-commerce-furniture-c869e.firebaseapp.com',
  projectId: 'e-commerce-furniture-c869e',
  storageBucket: 'e-commerce-furniture-c869e.appspot.com',
  messagingSenderId: '919670896585',
  appId: '1:919670896585:web:002b7dae7923a234815a18'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
