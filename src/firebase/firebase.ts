// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0Ftbv64w4cu1-teaLub7_z-zNY3Cik2I',
  authDomain: 'angular-course-6d09e.firebaseapp.com',
  projectId: 'angular-course-6d09e',
  storageBucket: 'angular-course-6d09e.appspot.com',
  messagingSenderId: '260743047763',
  appId: '1:260743047763:web:6e758620096630717cf4a6',
  measurementId: 'G-V0WEQ59359',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

const analytics = getAnalytics(app);

// export async function getNames() {
//   const querySnapshot = await getDocs(collection(db, 'names'));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data()['name']);
//   });
// }
