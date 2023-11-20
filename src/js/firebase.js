import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9YYRnpd_Xwdnn_NICNZldhGgWDhJ18S0",
  authDomain: "iccs340-d3dff.firebaseapp.com",
  projectId: "iccs340-d3dff",
  storageBucket: "iccs340-d3dff.appspot.com",
  messagingSenderId: "1041341816784",
  appId: "1:1041341816784:web:aece91b386ad33347c63d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}