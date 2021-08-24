import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCWzYzzzkw-G6qPTH9AV8zPUK8SSQc6kO4",
    authDomain: "cart-react-d044a.firebaseapp.com",
    projectId: "cart-react-d044a",
    storageBucket: "cart-react-d044a.appspot.com",
    messagingSenderId: "953591372956",
    appId: "1:953591372956:web:65392929d1211280b0a159"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
