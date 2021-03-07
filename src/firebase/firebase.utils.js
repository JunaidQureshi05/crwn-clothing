import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAaKqx3Nd57L2o28Pu_jHHe_-Q361Q3p4E',
  authDomain: 'crown-db-d4330.firebaseapp.com',
  projectId: 'crown-db-d4330',
  storageBucket: 'crown-db-d4330.appspot.com',
  messagingSenderId: '760909532990',
  appId: '1:760909532990:web:c832e3b688aee78868666f',
  measurementId: 'G-ZS6VCP0VBF',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
