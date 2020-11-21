import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5j1LcoW6ST5jVNaaFmTyAhIes2f8zpBo",
    authDomain: "grupou-f3868.firebaseapp.com",
    databaseURL: "https://grupou-f3868.firebaseio.com",
    projectId: "grupou-f3868",
    storageBucket: "grupou-f3868.appspot.com",
    messagingSenderId: "909891493967",
    appId: "1:909891493967:web:dbba1b29db99b203db0a3a"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
