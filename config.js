import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyACxH894IlE58bHLBqsLoG7agSF3YEAQGw",
  authDomain: "quizz-buzzer-3b899.firebaseapp.com",
  databaseURL: "https://quizz-buzzer-3b899-default-rtdb.firebaseio.com",
  projectId: "quizz-buzzer-3b899",
  storageBucket: "quizz-buzzer-3b899.appspot.com",
  messagingSenderId: "913596402678",
  appId: "1:913596402678:web:db7893b32ef180eb8055d7",
  measurementId: "G-LZHH1CSQNT"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
