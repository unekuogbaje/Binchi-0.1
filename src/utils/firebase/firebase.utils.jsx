import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,

  } from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyDvvHxyEvi_LGr15lSnSC4qC92ybM2qSLo",
    authDomain: "smthng-sold-db.firebaseapp.com",
    projectId: "smthng-sold-db",
    storageBucket: "smthng-sold-db.appspot.com",
    messagingSenderId: "766298919988",
    appId: "1:766298919988:web:597996f7b86c0cc5d3e661"
};


const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if (!userAuth) return;
  
      const userDocRef = doc(db, 'users', userAuth.uid );
  
      const userSnapshot = await getDoc(userDocRef);
      // user data does not exist
      // create / set the documen with the data from userAuth in my collection
  
      if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
  
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
  
      // user data exists
      // return userDocRef
  
      return userDocRef;
    };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  };

  export const signOutUser = async () => await signOut(auth);