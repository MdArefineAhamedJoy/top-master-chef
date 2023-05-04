import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLodging] = useState(true);
  const providerGoogle = new GoogleAuthProvider();

  const providerGithub = new GithubAuthProvider();

  //  login section start
  const createAccount = (email, password) => {
    setLodging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLodging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

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
  //  login section end
  // login with google
  const handelGoogleLogin = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  //   login with github
  const handelGithubLogin = () => {
    return signInWithPopup(auth,providerGithub);
  };
  const authInfo = {
    createAccount,
    logIn,
    logOut,
    handelGoogleLogin,
    handelGithubLogin,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
