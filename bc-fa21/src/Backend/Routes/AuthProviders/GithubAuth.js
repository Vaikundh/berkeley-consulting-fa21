// must have site URL before creating Github App for auth on Firebase
import { GithubAuthProvider } from "firebase/auth";

// With popup.
var provider = new firebase.auth.GithubAuthProvider();
 provider.addScope('repo');
 firebase.auth().signInWithPopup(provider).then(function(result) {
   // This gives you a GitHub Access Token.
   var token = result.credential.accessToken;
   // The signed-in user info.
   var user = result.user;
 }).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // The email of the user's account used.
   var email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
   if (errorCode === 'auth/account-exists-with-different-credential') {
     alert('You have signed up with a different provider for that email.');
     // Handle linking here if your app allows it.
   } else {
     console.error(error);
   }
 });