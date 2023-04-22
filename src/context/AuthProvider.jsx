import React, {useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {auth} from "../firebase/firebase";
import {useNavigate} from "react-router-dom";

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    // const navigate = useNavigate()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // const login = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .catch(err => console.log("error occured : " + err));
    //
    //         // .then()
    //         // .catch(err => console.log("error occured : " + err));
    // }
    const logout = () => {

        signOut(auth)
            .catch(err => console.log(err));
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            console.log("auth state changed")
        });
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{currentUser, createUser, signInWithEmailAndPassword, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;