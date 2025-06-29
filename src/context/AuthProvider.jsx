import React,{createContext} from 'react';
import {  createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,signOut ,
    onAuthStateChanged,
     GoogleAuthProvider,signInWithPopup  } from "firebase/auth";
import auth from './../firebase/firebase.config';
import {useState, useEffect} from "react"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = ()=>{
        return signOut(auth)
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo= {
        user,
        setUser,
        registerUser,
         signInUser,
         logOutUser,
         googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
