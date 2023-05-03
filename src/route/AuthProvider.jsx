import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLodging] = useState(true);

  const createAccount = (email, password) => {
    setLodging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLodging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLodging(false);
    });
    return () => {
      setLodging(true);
      unSubscribe();
    };
  }, []);
 
  const authInfo = {
    createAccount,
    logIn,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
