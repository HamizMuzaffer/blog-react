import { auth } from "../Config/Config";


import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    updateProfile

} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";


export const creatuserbySignUp = () => {


    createUserWithEmailAndPassword(auth, email, passoword, username)

        .then((userCredential) => {
            const user = userCredential.user;
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        })
}


export const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const userLogOut = ( ) =>
{

    signOut(auth)
    .then(() => {
      window.location.href = "./login.html"
    }).catch((error) => {

        console.error(error)
})}

export const getCurrentUser = async()=>{
try {
    const user = auth.currentUser;
    return await user;
} catch (error) {
    
}
}














