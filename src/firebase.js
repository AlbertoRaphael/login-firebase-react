import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC7qE9g9l3Dh81fkL11AJyB1BAjfwF-YbQ",
  authDomain: "login-01-edfe5.firebaseapp.com",
  databaseURL: "https://login-01-edfe5-default-rtdb.firebaseio.com",
  projectId: "login-01-edfe5",
  storageBucket: "login-01-edfe5.appspot.com",
  messagingSenderId: "573867060290",
  appId: "1:573867060290:web:d426877e66014316d1d1db",
  measurementId: "G-DE1MM2H12R"
})

export const auth = firebase.auth();

export default app;