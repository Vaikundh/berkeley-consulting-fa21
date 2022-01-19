import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-UD6hkLg9h5EPsM85h1xq_NAkIfdh620",
  authDomain: "bc-wdb-f21.firebaseapp.com",
  projectId: "bc-wdb-f21",
  storageBucket: "bc-wdb-f21.appspot.com",
  messagingSenderId: "593773025944",
  appId: "1:593773025944:web:696bc0715ab77978e10eed",
  measurementId: "G-55L9HT5HJW",
};

const firebase_app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase_app);

export default firebase_app;
