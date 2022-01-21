import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

//BEFORE MERGING TO MAIN, MAKE SURE TO CHANGE DB INFO TO bc-wdb-fa21

// deployed
// const firebaseConfig = {
//   apiKey: "AIzaSyA-UD6hkLg9h5EPsM85h1xq_NAkIfdh620",
//   authDomain: "bc-wdb-f21.firebaseapp.com",
//   projectId: "bc-wdb-f21",
//   storageBucket: "bc-wdb-f21.appspot.com",
//   messagingSenderId: "593773025944",
//   appId: "1:593773025944:web:696bc0715ab77978e10eed",
//   measurementId: "G-55L9HT5HJW",
// };

// bc-fa21-wdb-DEV
const firebaseConfig = {
  apiKey: "AIzaSyASUdl9plXiE8LotHlGXl4kmpuyD8ax5Uc",
  authDomain: "bc-wdb-fa21-dev.firebaseapp.com",
  projectId: "bc-wdb-fa21-dev",
  storageBucket: "bc-wdb-fa21-dev.appspot.com",
  messagingSenderId: "134291914791",
  appId: "1:134291914791:web:27cf816dae0cd0b224ce02",
  measurementId: "G-6ZQHNE6MXE"
}; 

const firebase_app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase_app);

export default firebase_app;
