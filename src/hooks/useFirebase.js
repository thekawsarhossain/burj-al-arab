import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // google sign in handler 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const userInfo = result.user;
                setUser(userInfo);
            })
            .catch(error => setError(error.message))
    }

    // signin using github
    const gitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error))
    }

    // user data 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
    })

    // signOut here 
    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => setError(error.message))
    }
    console.log(error)
    console.log(user)
    // return form here 
    return {
        user,
        error,
        googleSignIn,
        gitHubSignIn,
        signOutHandler
    }
}

export default useFirebase;