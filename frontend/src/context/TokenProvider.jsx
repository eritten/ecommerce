import React, {createContext, useContext, useState, useEffect} from 'react'

const TokenContext = createContext()

const TokenProvider = ({children}) => {
    const [token, setToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // check if token exists in componentDidMount
    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
            setIsAuthenticated(true)
        }
    }, [])

    // logout function
    const logout = () => {
        setToken('')
        setIsAuthenticated(false)
        localStorage.removeItem('token')
    }

  return (
    <TokenContext.Provider value={{token, setToken, isAuthenticated, setIsAuthenticated, logout}}>
      {children}
    </TokenContext.Provider>
  )
}

export const useToken = () => useContext(TokenContext)

export default TokenProvider