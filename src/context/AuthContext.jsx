import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useContext } from "react";
import React, { useState } from "react";
import { useEffect } from "react";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser != null) {
        SetUser({
          name: currentUser.displayName,
          email: currentUser.email,
          img: currentUser.photoURL,
        });
      } else {
        SetUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
