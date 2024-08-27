import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    updateProfile
  } from "firebase/auth";
import auth from "../utils/firebase";


let authContext = createContext();

export default function AuthProvider({ children }) {
  let [currentUser, setCurrentUser] = useState();


  const signup = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password).then(user => {
        updateProfile(user.user, {
            displayName: displayName
          }).then(() => {
            console.log("User profile updated with display name:", displayName);
          }).catch((error) => {
            console.error("Error updating user profile:", error);
          });
    }).catch((error) => {
        console.error("Error Sign up:", error);
        //return json({message: 'Hello'}, {status: 400})
        return new Error(error)
      });
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.error("Error Sign In:", error);
      //return json({message: 'Hello'}, {status: 400})
      return new Error(error)
    });
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateUserEmail = (email) => {
    return updateEmail(auth.currentUser, email);
  };
  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
      setCurrentUser(null);
    };
  }, []);


  return <authContext.Provider value={{
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword
    }}>
        {children}
    </authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}
