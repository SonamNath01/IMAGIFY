
import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
    const[user,setuser] =useState(null);
    const value = {
        user,
        setuser,
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )       

}
export default AppContextProvider;
