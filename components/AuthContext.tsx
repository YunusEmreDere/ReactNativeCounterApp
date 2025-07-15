import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    username: string;
    login: (username: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUserName] = useState("");

    const login = (name: string) => {
        setIsLoggedIn(true);
        setUserName(name);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserName("");
    }

    return(
        <AuthContext.Provider value={{isLoggedIn,username,login,logout }}> 
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context =useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}