import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEJo3SFXpwBf4Y1rKrUQ2w8aJDPek6AQI",
  authDomain: "foodie-46ad5.firebaseapp.com",
  projectId: "foodie-46ad5",
  storageBucket: "foodie-46ad5.appspot.com",
  messagingSenderId: "315598190823",
  appId: "1:315598190823:web:4c9ca66149384e81f60a42",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
