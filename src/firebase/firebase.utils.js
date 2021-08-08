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
  //tao profile cho user
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //console.log(snapShot);

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData

        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  //chuc nang dang nhap bang google
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;