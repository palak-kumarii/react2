import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOz1Q2Ni-qXB9QYH3o-nW3CfT1VGd0y6o",
  authDomain: "palakkumari-4cbf8.firebaseapp.com",
  projectId: "palakkumari-4cbf8",
  storageBucket: "palakkumari-4cbf8.firebasestorage.app",
  messagingSenderId: "458378951974",
  appId: "1:458378951974:web:3b633512e09581901415e7",
  measurementId: "G-SR28ZECVS8",
  databaseURL :"https://palakkumari-4cbf8-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
