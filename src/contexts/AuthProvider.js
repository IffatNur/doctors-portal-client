import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';
import './Authprovider.css';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState("light");

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name) =>{
      return updateProfile(auth.currentUser, {
        displayName: name
      })
    }

    const passwordReset = (email) =>{
      return sendPasswordResetEmail(auth, email);
    }

    const googleSignin =()=>{
      return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
      setLoading(true);
      return signOut(auth);
    }

    const toggleTheme = () =>{
      setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
      })
      return () => unsubscribe();
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      updateUser,
      passwordReset,
      googleSignin,
      theme,
      toggleTheme,
    };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        <div id={theme}>{children}</div>
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;