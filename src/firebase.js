import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOQGhEnOwHGmU4vg58lKPtkPYQOluKxmM",
    authDomain: "facebook-clone-981.firebaseapp.com",
    databaseURL: "https://facebook-clone-981.firebaseio.com",
    projectId: "facebook-clone-981",
    storageBucket: "facebook-clone-981.appspot.com",
    messagingSenderId: "525597416397",
    appId: "1:525597416397:web:1db7820bf6e2626bb90284",
    measurementId: "G-L7XS7XW2K8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }

  export default db