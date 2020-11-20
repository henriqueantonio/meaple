import firebase from "firebase";
import "firebase/auth";
import 'firebase/storage'
import 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyCjeR8IB5KpZSDLxoP2SvZDDfoN1XFjEgc",
  authDomain: "meaple-f95d3.firebaseapp.com",
  databaseURL: "https://meaple-f95d3.firebaseio.com",
  projectId: "meaple-f95d3",
  storageBucket: "meaple-f95d3.appspot.com",
  messagingSenderId: "986379496924",
  appId: "1:986379496924:web:d9b3865f0d0ef440343319",
  measurementId: "G-V4Y45YMVD5"
};


const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;


