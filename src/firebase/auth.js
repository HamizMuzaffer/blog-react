import { app } from "../Config/Config";
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
  
  const auth = getAuth(app);

  export const creatuserbySignUp = () => {
  
  
    createUserWithEmailAndPassword(auth, email, passoword,username)

      .then((userCredential) => {     
        const user = userCredential.user;
      })
    }  

    