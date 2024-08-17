import { createContext, useContext, useState } from "react";

let GeneralContext = createContext()

export default function GeneralContextProvider({ children }) {
    let [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    return <GeneralContext.Provider value={{
        isMenuOpen,
        toggleMenu,
        }}>
        {children}
    </GeneralContext.Provider>
}

export function useGeneralContext() {
    return useContext(GeneralContext)
}