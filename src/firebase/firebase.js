import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC0eQuWx8mNBwIZglVkYOnNy7F05ANpQrU",
  authDomain: "react-au.firebaseapp.com",
  databaseURL: "https://react-au.firebaseio.com",
  projectId: "react-au",
  storageBucket: "react-au.appspot.com",
  messagingSenderId: "1012700706198"
};
firebase.initializeApp(config);

if (!firebase.app.length){
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export{
  auth,
};