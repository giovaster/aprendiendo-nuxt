import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyC5rxkzk_eVwI3dQvFaC89hcpVBn4zCEnA",
  authDomain: "nxut-50586.firebaseapp.com",
  databaseURL: "https://nxut-50586.firebaseio.com",
  projectId: "nxut-50586",
  storageBucket: "nxut-50586.appspot.com",
  messagingSenderId: "1021053836954"
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