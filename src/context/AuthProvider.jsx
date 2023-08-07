import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext()

    
const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {

    }, [])





    return (
        <AuthContext.Provider
            value={{
                auth,
                cargando,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}
export const useAuth = () => useContext(AuthContext)