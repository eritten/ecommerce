import React, {createContext, useContext, useState} from "react";

const EmailContext = createContext();

const EmailProvider = ({children}) => {
    const [email, setEmailLocal] = useState('');

    return (
        <EmailContext.Provider value={{email, setEmailLocal}}>
            {children}
        </EmailContext.Provider>
    );
}

export const useEmail = () => useContext(EmailContext);

export default EmailProvider;