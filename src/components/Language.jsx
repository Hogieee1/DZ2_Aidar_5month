import React, { createContext, useState } from "react";
import Button from "./Button";
import Display from "./Display";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("english");

const toggleLanguage = () =>
    setLanguage(language === "english" ? "french" : "english");

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
        </LanguageContext.Provider>
    );
};

const Language = () => {
    return (
        <LanguageProvider>
        <Button />
        <Display />
        </LanguageProvider>
    );
};

export default Language;
