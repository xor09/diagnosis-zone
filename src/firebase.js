// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Vk1CLZxspCRs2rovQeXt8zHNZfWXjkU",
  authDomain: "diagnosis-zone-db.firebaseapp.com",
  projectId: "diagnosis-zone-db",
  storageBucket: "diagnosis-zone-db.appspot.com",
  messagingSenderId: "647285479847",
  appId: "1:647285479847:web:247142f6e6f5841adb7e82",
  measurementId: "G-L7R8X8DBV5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
