import React, { createContext, useState, type ReactNode, useContext } from "react";

type Ligado = "ligado" | "desligado";

interface MainContextType {
    ligado: Ligado;
    toggleLigado: () => void;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ligado, setLigado] = useState<Ligado>("desligado");

    const toggleLigado = () => {
        setLigado((prev) => (prev === "ligado" ? "desligado" : "ligado"));
    };

    return (
        <MainContext.Provider value={{ ligado, toggleLigado }}>
            {children}
        </MainContext.Provider>
    );
};

export const useMainContext = (): MainContextType => {
    const context = useContext(MainContext);        
    if (!context) {
        throw new Error("useMainContext deve ser usado dentro de um MainProvider");
    }
    return context;
};