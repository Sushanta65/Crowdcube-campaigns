import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true)
  const provider = new GoogleAuthProvider();
  const createNewUser = (email, password, name, photoUrl) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser({ ...auth.currentUser });
            setLoading(false)
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  const loginUser = (email, password, navigate, location) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state? location.state : '/')
        setLoading(false)
        
      })
      .catch((err) => console.log(err.message));
  };

  const signInWithGoogle = (navigate, location) => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state? location.state : '/')
        setLoading(false)
      })
      .catch((err) => console.log(err.message));
  };

  const loggedOut = () => {
    setLoading(true)
    signOut(auth)
  } 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    createNewUser,
    user,
    setUser,
    loginUser,
    signInWithGoogle,
    loggedOut,
    loading
  };

  
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
