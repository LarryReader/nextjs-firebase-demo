import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDob5FNEbLMsp0ECxreV5lwjREHzk9U-4",
  authDomain: "nextjs-firebase-demo-lr.firebaseapp.com",
  projectId: "nextjs-firebase-demo-lr",
  storageBucket: "nextjs-firebase-demo-lr.firebasestorage.app",
  messagingSenderId: "1004062895759",
  appId: "1:1004062895759:web:d8a8c62ff177258814cafa"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();