// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDX1Y3-Aqby9K83MxMYQLx_cirPRpZk_0s',
  authDomain: 'oneroot.farm',
  projectId: 'field-19195',
  storageBucket: 'gs://field-19195.appspot.com',
  messagingSenderId: '362070477410',
  appId: '1:362070477410:web:220955662e00d969d95f3b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
