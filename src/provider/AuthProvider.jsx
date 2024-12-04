import { createContext, useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const createNewUser = (email, password, name, photoUrl) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoUrl
            })
            .then(() => {
                setUser({...auth.currentUser})
            })
            .catch(err => setError(err.message))
        })
        .catch(err => setError(err.message))
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(err => console.log(err.message))
    }

    const userInfo = {
        createNewUser,
        user,
        setUser,
        loginUser
    }

    console.log(user)
console.log(error)
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;