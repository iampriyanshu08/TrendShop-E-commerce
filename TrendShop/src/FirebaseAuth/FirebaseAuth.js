import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4U7GPd2qu56qwHGIjbRfzczg6-vVYnIo",
  authDomain: "trendshop-bacce.firebaseapp.com",
  projectId: "trendshop-bacce",
  storageBucket: "trendshop-bacce.appspot.com",
  messagingSenderId: "917892351915",
  appId: "1:917892351915:web:7201f9c9449efd8953f4ee",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db}