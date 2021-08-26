import firebase from 'firebase/app';
import 'firebase/auth';  
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAVn3oKXt40mL2iN8-mMOWilsVcXBFNgIA",
  authDomain: "react-shopping-cart-app-8de8a.firebaseapp.com",
  projectId: "react-shopping-cart-app-8de8a",
  storageBucket: "react-shopping-cart-app-8de8a.appspot.com",
  messagingSenderId: "704014579101",
  appId: "1:704014579101:web:6197aa551b025a8055ab74",
  measurementId: "G-2GWG3RRHN1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const db = firebase.firestore(); 
export const storage = firebase.storage();

export default firebase