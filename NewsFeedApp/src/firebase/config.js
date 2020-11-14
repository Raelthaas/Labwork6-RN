import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAzLcDhQLIS8Rr702TN_SuXNsHa7vI-9cw",
  authDomain: "rn-firebase-772a9.firebaseapp.com",
  databaseURL: "https://rn-firebase-772a9.firebaseio.com",
  projectId: "rn-firebase-772a9",
  storageBucket: "rn-firebase-772a9.appspot.com",
  messagingSenderId: "806053570449",
  appId: "1:806053570449:web:0180ca4db6f6aa0e4cdc30"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
