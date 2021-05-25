import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCY5N8ASQDSf02vsS9Q1FUrrJoJ12MHUg0",
  authDomain: "frinvoice-59874.firebaseapp.com",
  projectId: "frinvoice-59874",
  storageBucket: "frinvoice-59874.appspot.com",
  messagingSenderId: "381709464008",
  appId: "1:381709464008:web:4c8f9a8f666972903a10fd",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
