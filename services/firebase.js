import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'

var config = {
  apiKey: " AIzaSyA9IBh-ozZxQIZgTk56_uUh03ioziEwZ0c",
  authDomain: "nuxtbd.firebaseapp.com",
  databaseURL: "https://nuxtbd.firebaseio.com",
  projectId: "nuxtbd",
  storageBucket: "nuxtbd.appspot.com",
  messagingSenderId: "1964859792751"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  const db = firebase.firestore()
  const storage = firebase.storage().ref()
  const auth = firebase.auth()

  export default firebase
  export {
    db,
    storage,
    auth
  }