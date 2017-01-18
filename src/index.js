import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyCnwAuNsDPbTdwHWBD1DaDkLEy8RqH6U4c",
    authDomain: "news-98d26.firebaseapp.com",
    databaseURL: "https://news-98d26.firebaseio.com",
    storageBucket: "news-98d26.appspot.com",
    messagingSenderId: "692400871451"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
