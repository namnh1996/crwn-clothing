import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARc2SLStnLA3Ucsb-TUCmJJ7RZ1NZJVyA",
    authDomain: "crwn-db-ec777.firebaseapp.com",
    projectId: "crwn-db-ec777",
    storageBucket: "crwn-db-ec777.appspot.com",
    messagingSenderId: "334325507439",
    appId: "1:334325507439:web:faf027beedece98c3b749a"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;