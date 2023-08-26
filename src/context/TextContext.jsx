import React from "react";
export const TextContext  = React.createContext();

export const Text = ({children}) => {
    const [textMode,setTextMode] = React.useState(false);
    const toggleTextMode= () => {
        setTextMode(!textMode)
    };

    return (
        <TextContext.Provider value={{textMode,toggleTextMode}}>
            {children}
        </TextContext.Provider>
    )
};
