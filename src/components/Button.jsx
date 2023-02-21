import React, { useContext } from "react";
import { LanguageContext } from "./Language";

const Button = () => {
    const { toggleLanguage } = useContext(LanguageContext);

    return <button onClick={toggleLanguage}>Toggle Language</button>;
};

export default Button;
