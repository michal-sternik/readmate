import React, {useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {auth} from "../firebase";

export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser((currentUser))
        });
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{currentUser, createUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;