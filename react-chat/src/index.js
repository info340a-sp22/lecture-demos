import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//css!
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';


// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyA3TuuXPEJL0A1MZaF4_gqWfDTwCsBTE8M",
   authDomain: "react-chat-sp22a.firebaseapp.com",
   databaseURL: "https://react-chat-sp22a-default-rtdb.firebaseio.com",
   projectId: "react-chat-sp22a",
   storageBucket: "react-chat-sp22a.appspot.com",
   messagingSenderId: "918500798473",
   appId: "1:918500798473:web:9448020993ea6a6da188d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);



///GLOBAL CLOUD VARIABLE
/*

const rtdb = {
   message: "hello world",
   cookieeCount: 4,
   prof: {
      firstName: "Joel",
      lastName: "Ross"
   },
   userFavorites: {
      user1: {
         favoriteMessage: "quack #1"
      },
      user2: {
         favoriteMessage: "something else"
      }
   }

   otherData: {
      ...
   },
   allMessages: {
      N30GC: {A},
      N30GL: {B},
      N30HY: {C},
   }

   //delete index 1
   //make index 1 lowercase

}

*/