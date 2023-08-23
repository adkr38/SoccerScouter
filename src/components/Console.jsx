import React from "react";
import {ThemeContext} from "../context/ThemeContext"

const Console = () =>{

    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const consoleStyling =
        theme === "light"
        ?"w-full h-full bg-zinc-100"
        :"w-full h-full bg-zinc-400"


    return(
        <div className={consoleStyling}>

        </div>


    )

}

export default Console
