import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ5VTSPZjTQgIE6ftHjp2-7p7F39BYp1g",
  authDomain: "comics-marvel-97ebf.firebaseapp.com",
  projectId: "comics-marvel-97ebf",
  storageBucket: "comics-marvel-97ebf.appspot.com",
  messagingSenderId: "258281637192",
  appId: "1:258281637192:web:9427452405140088a8df7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Authentication
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const logInWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

export async function addUser(user) {
  try {
    await addDoc(collection(db, "users"), user);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}