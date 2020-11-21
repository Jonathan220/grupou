import React, {createContext, useState,useEffect} from 'react';
import { Children } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [user,setUser] = useState();

    const ListenAuth = (userState) => {
        setUser(userState);
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener;
    },[])

    const signIn = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(resp=>{
            //console.warn(resp)
        })
        .catch(err => {
            console.warn(err)
        })
    }
    const signUp = (email,password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(resp=>{
            //console.warn(resp)
        })
        .catch(err => {
            console.warn(err)
        })
    }
    const signOut = (email,password) => {
        firebase.auth().signOut()
        .then(resp=>{
            console.warn('Deslogado com sucesso!')
        })
        .catch(err => {
            console.warn(err)
        })
    }
    return(
        <UserContext.Provider value={{user,signIn,signOut,signUp}}>  
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider};