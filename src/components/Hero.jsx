import React from "react";
import {ThemeContext} from "../context/ThemeContext"

const Hero = () =>{


    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const h1Styling =
        theme ==="light"
    ?"text-2xl text-neutral-800"
    :"text-2xl text-neutral-200"

    const bgStyling =

        theme ==="light"
    ?"animate-fade-out-semi w-[300%] h-[300%]  bg-[url('../autumn.svg')] opacity-[2%] rotate-45 scale-[1.5] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-center"
    :"animate-fade-out-semi w-[300%] h-[300%]  bg-[url('../autumn.svg')] opacity-[2%] rotate-45 scale-[1.5] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-center invert"


    return(

        <div className="absolute inset-0 overflow-hidden">
        <div className={bgStyling}>


</div>

        <div className="z-10 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className={h1Styling}>
            Welcome to SoccerScout!
        </h1>
        </div>

</div>

    )

}

export default Hero
