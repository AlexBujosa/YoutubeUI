import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useContext } from "react";
import React, { useState } from "react";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        SetUser({ email: result.user.email, img: result.user.photoURL });
      })
      .catch((error) => {
        SetUser(null);
      });
  };

  const logOut = () => {
    signOut(auth);
    SetUser(null);
  };
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
