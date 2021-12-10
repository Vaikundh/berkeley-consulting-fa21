import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from "../index"
async function signUp(email:string, password:string):Promise<boolean> {
    const success = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(`User created: ${user}`)
        return true
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
        return false
    });
    return success
}
export default signUp;