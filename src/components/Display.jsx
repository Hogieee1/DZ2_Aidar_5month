import React, { useContext } from "react";
import { LanguageContext } from "./Language";

const Display = () => {
    const { language } = useContext(LanguageContext);

    return <p>Current Language: {language}</p>;
};

export default Display;
