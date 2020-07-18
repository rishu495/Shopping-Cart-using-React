import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD1U6iRzYR6nbyeYuCr1-3wDZz71dzoPvs",
  authDomain: "react-c0d11.firebaseapp.com",
  databaseURL: "https://react-c0d11.firebaseio.com",
  projectId: "react-c0d11",
  storageBucket: "react-c0d11.appspot.com",
  messagingSenderId: "292358758844",
  appId: "1:292358758844:web:bfa5cac4339db3a0960bb9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

