import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_o1hMGIu4h4cLU8vmtjfdVg4KDqzrncg",
  authDomain: "booking-e1958.firebaseapp.com",
  projectId: "booking-e1958",
  storageBucket: "booking-e1958.appspot.com",
  messagingSenderId: "693064639867",
  appId: "1:693064639867:web:3d25fffff4d116eb5389de",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
