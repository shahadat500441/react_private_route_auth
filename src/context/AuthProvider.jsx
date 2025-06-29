import React,{createContext} from 'react';
import {  createUserWithEmailAndPassword, 
    signInWithEmailAndPassword  } from "firebase/auth";
import auth from './../firebase/firebase.config';
import {useState} from "react"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo= {
        user,
        setUser,
        registerUser,
         signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
