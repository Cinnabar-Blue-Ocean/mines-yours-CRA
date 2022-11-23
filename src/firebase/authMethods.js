import React,{ createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider,db } from "./index.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup
} from 'firebase/auth'

import { doc,collection, setDoc, getDoc} from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setLoading(false);
  })

    return unsubscribe;
  }, []);

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle() {
    return signInWithPopup(auth,googleProvider);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signOutUser() {
    return signOut(auth);
  }

  // function resetPassword(email) {
  //   return sendPasswordResetEmail(auth,email);
  // }

  function addData(data) {
    return setDoc(doc(db, "users", user.uid), data);
  }

  function findData(id) {
    console.log('user.uid',id)
    return getDoc(doc(db, "users", id));
  }


  // function updateEmail(email) {
  //   return user.updateEmail(email);
  // }

  // function updatePassword(password) {
  //   return user.updatePassword(password);
  // }

  const value = {
    user,
    signIn,
    signInWithGoogle,
    signUp,
    signOutUser,
    // resetPassword,
    addData,
    findData
    // updateEmail,
    // updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
