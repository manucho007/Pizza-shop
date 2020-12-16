import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  //   Your config goes here
};

firebase.initializeApp(firebaseConfig);

export const createUserDoc = async (user, contactInfo) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    const createdAt = new Date();
    try {
      userRef.set({ email, createdAt, ...contactInfo });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
