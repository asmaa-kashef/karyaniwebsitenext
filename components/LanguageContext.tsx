"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
    language: "en" | "ar";          
    setLanguage: (lang: "en" | "ar") => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => { },
});

// Provider ????? ?????? ????? ?????? ??? component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<"en" | "ar">("en");
   
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useLanguage = () => useContext(LanguageContext);
