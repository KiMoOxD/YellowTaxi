import { createContext, useContext, useState } from "react";

let GeneralContext = createContext()

export default function GeneralContextProvider({ children }) {
    let [isMenuOpen, setIsMenuOpen] = useState(false)
    let [isAccOpen, setIsAccOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    function toggleAcc() {
        setIsAccOpen(prev => !prev)
    }

    return <GeneralContext.Provider value={{
        isMenuOpen,
        toggleMenu,
        isAccOpen,
        toggleAcc
        }}>
        {children}
    </GeneralContext.Provider>
}

export function useGeneralContext() {
    return useContext(GeneralContext)
}