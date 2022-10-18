import React, { useState } from 'react'
import { createContext } from "react";
import axios from '../api/axios';
import { useLocalStorage } from '../hooks/useLocalStorage';


export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
const [isLoggedIn,setIsLoggedIn] =useLocalStorage("isLoggedIn",false)
const [access, setAccess] = useLocalStorage("access", null);
const [refresh, setRefresh] = useLocalStorage("refresh", null);
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,access, setAccess,refresh, setRefresh}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider