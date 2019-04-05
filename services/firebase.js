import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA9IBh-ozZxQIZgTk56_uUh03ioziEwZ0c",
    authDomain: "nuxtbd.firebaseapp.com",
    databaseURL: "https://nuxtbd.firebaseio.com",
    projectId: "nuxtbd",
    storageBucket: "nuxtbd.appspot.com",
    messagingSenderId: "964859792751"
  };
  if(!firebase.apps.lenght){
    firebase.initializeApp(config);
  }
  const bd = firebase.firestore()
  export default firebase
  export{
    db
  }