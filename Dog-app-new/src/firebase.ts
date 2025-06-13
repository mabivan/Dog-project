import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7cstd1K9C46lvDityXPFlCvlm2gw5vVQ",
  authDomain: "dog-app-d251e.firebaseapp.com",
  projectId: "dog-app-d251e",
  storageBucket: "dog-app-d251e.firebasestorage.app",
  messagingSenderId: "540042134222",
  appId: "1:540042134222:web:c3d513ac30d290c307069f",
  measurementId: "G-X9VHJBSMS9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);