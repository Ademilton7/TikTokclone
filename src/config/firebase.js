import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBTb7WRkOSfyCaVLU6EgJx_xQx3VKyipV8",
  authDomain: "tiktokdev-164e2.firebaseapp.com",
  projectId: "tiktokdev-164e2",
  storageBucket: "tiktokdev-164e2.appspot.com",
  messagingSenderId: "413966782179",
  appId: "1:413966782179:web:11411fd4e70f0a2c703fd6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;