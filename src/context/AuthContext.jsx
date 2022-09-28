import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import React, { useState, useEffect, createContext, useContext } from "react";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [id, SetId] = useState(null);
  const [user, SetUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser != null) {
          recognizedOrRegisterChannel(
            currentUser.email,
            currentUser.displayName,
            currentUser.photoURL
          );
        } else {
          SetUser(null);
        }
      });
      return unsubscribe;
    });
  };
  const recognizedOrRegisterChannel = (email, name, img) => {
    fetch("http://localhost:4000/auth/channel", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        photo: img,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getAuth = async (email) => {
    await fetch("http://localhost:4000/getAuth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        SetId(res.auth._id);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        SetUser({
          name: currentUser.displayName,
          email: currentUser.email,
          img: currentUser.photoURL,
        });
        getAuth(currentUser.email);
      } else {
        SetUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
