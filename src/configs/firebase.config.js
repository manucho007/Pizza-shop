import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // Change for your own configuration
  apiKey: 'AIzaSyA_oVDRyqFhfxPUfeRntSLSGk6DHl1YdE8',
  authDomain: 'devf-3bee8.firebaseapp.com',
  databaseURL: 'https://devf-3bee8.firebaseio.com',
  projectId: 'devf-3bee8',
  storageBucket: 'devf-3bee8.appspot.com',
  messagingSenderId: '329327565336',
  appId: '1:329327565336:web:c29fd1c9f814076e',
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

export const createOrderDoc = async ({
  currentUser,
  cartItems,
  totalPrice,
  contactInfo,
}) => {
  const date = new Date().toLocaleString();
  firestore
    .doc(`users/${currentUser.id}`)
    .collection('orders')
    .add({ cartItems, date, totalPrice, contactInfo });
};

export const fetchHistoryDocs = async (currentUser) => {
  const history = [];
  await firestore
    .doc(`users/${currentUser.id}`)
    .collection('orders')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { date, cartItems, totalPrice, cotactInfo } = doc.data();
        history.push({
          id: doc.id,
          date,
          cartItems,
          totalPrice,
          cotactInfo,
        });
      });
    });
  return history;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
