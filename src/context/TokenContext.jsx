import React, { createContext, useState, useContext } from 'react';

// Create the context
export const TokenContext = createContext();

// Create a provider component
export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW1AZ21haWwuY29tIiwiZXhwIjoxNzIzNzQ4ODgwfQ.ru90r-QfiOUc99xLR7pturcX7N-Rvo-RGzckH5U-Vuo");

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useToken = () => {
    return useContext(TokenContext);
};
