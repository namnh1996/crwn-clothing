import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyARc2SLStnLA3Ucsb-TUCmJJ7RZ1NZJVyA",
  authDomain: "crwn-db-ec777.firebaseapp.com",
  projectId: "crwn-db-ec777",
  storageBucket: "crwn-db-ec777.appspot.com",
  messagingSenderId: "334325507439",
  appId: "1:334325507439:web:faf027beedece98c3b749a",
};
//tao profile cho user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  //using to store documents to firebase 
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  //commit documents to firebase
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collection) => {
  const transfromCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      //encodeURI 
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transfromCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

//chuc nang dang nhap bang google
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
