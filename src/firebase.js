import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCE3VcckEKHAg2RFvNF0P801AuM5fR2Zhk",
    authDomain: "tinder-clone-2b487.firebaseapp.com",
    databaseURL: "https://tinder-clone-2b487.firebaseio.com",
    projectId: "tinder-clone-2b487",
    storageBucket: "tinder-clone-2b487.appspot.com",
    messagingSenderId: "432821625746",
    appId: "1:432821625746:web:328b532d85ecd18c66974b",
    measurementId: "G-R0N4P435QT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  
  export default database;