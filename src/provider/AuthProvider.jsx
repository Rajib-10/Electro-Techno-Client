/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)


    // create user 

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in 

    const userSign = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

     

    // google login
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    // update profile 

    const updateUserProfile=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }


     // user log out 

     const userLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }



       // observer auth state 
       useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log("current user",currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo = {
        googleLogin,
        createUser,
        userSign,
        updateUserProfile,
        user,
        loading,
        userLogOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;