import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children}) => {
    const auth = getAuth(app);

    const createAccount = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    const authInfo ={
        createAccount,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;