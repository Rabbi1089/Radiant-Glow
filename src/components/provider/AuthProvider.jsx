import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    console.log("print from auth -> update user",name,photo);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }


  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

const logout = () => {
  return signOut(auth)
}


  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser-->", currentUser);
      setLoading(true);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    updateUserProfile,
    signIn,
    user,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
