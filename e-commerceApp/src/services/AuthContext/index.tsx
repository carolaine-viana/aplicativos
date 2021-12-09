import { createContext, useState } from "react";

export const AuthContext = createContext([]);

function AuthProvider({children}){
    const [itensCheckout, setitensCheckout] = useState([]);
    
    return(
        <AuthContext.Provider value={[]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}

console.warn(AuthContext)