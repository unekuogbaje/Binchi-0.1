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
    apiKey: "AIzaSyBWQgjcVhaDvFfziZAwDNv4B4A7jlhgSkk",
    authDomain: "smthng-sold.firebaseapp.com",
    databaseURL: "https://smthng-sold-default-rtdb.firebaseio.com",
    projectId: "smthng-sold",
    storageBucket: "smthng-sold.appspot.com",
    messagingSenderId: "83534615252",
    appId: "1:83534615252:web:6d22446de43b28987ca141"
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
  
      const userDocRef = doc(db, 'users', userAuth.uid);
  
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