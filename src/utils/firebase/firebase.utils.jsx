import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs

  } from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCNR7g5RV56Lp1IqueVciCfSym9ssYO-FQ",
    authDomain: "so-clean-cd12b.firebaseapp.com",
    projectId: "so-clean-cd12b",
    storageBucket: "so-clean-cd12b.appspot.com",
    messagingSenderId: "413427791357",
    appId: "1:413427791357:web:8b36857577a0616460d594"
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

  export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
    ) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  }; 

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnaopshot) => {
      const { title, items } = docSnaopshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  };

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

  export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);