import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvCPnhXYPIA0XIk5iaPxaQGWrvg0prhcA",
  authDomain: "chat-home-626dc.firebaseapp.com",
  projectId: "chat-home-626dc",
  storageBucket: "chat-home-626dc.appspot.com",
  messagingSenderId: "575467956228",
  appId: "1:575467956228:web:74172796e9692fc3e22d51",
  measurementId: "G-6XXYE56SDP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
