import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Insert your Firebase config here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
