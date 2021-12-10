// sign in
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../index"


async function signIn(email:string, password:string):Promise<boolean> {
  const success = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    return true
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    return false
  });

  if (success) {
    return true;
  }
  return false;
}

export default signIn;