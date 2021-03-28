import React, { useContext, useState} from 'react'
import { auth } from "../../firebase";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState() 

    const value = {
        currentUser
    }


    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
            
        </div>
    )
}

