import * as firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDjb6PDcisXKcXk89ShUoln5P95En0aYmI",
    authDomain: "olxreact.firebaseapp.com",
    databaseURL: "https://olxreact.firebaseio.com",
    projectId: "olxreact",
    storageBucket: "olxreact.appspot.com",
    messagingSenderId: "747290137164",
    appId: "1:747290137164:web:c31355d88a843e22e45ae9",
    measurementId: "G-ECNC322B1M"
};
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
