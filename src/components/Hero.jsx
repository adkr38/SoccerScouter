import React from "react";
import {ThemeContext} from "../context/ThemeContext"
import {TextContext} from "../context/TextContext"
import Pan from "./Pan"
import * as ai from "react-icons/ai"
import * as gi from "react-icons/gi"
import * as lu from "react-icons/lu"
import * as tb from "react-icons/tb"

const Hero = () =>{


    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const {textMode,toggleTextMode} = React.useContext(TextContext)


    const bgStyling =
        theme ==="light"
    ?"animate-fade-out-semi w-[300%] h-[300%]  bg-[url('../autumn.svg')] opacity-[1%] rotate-45 scale-[1.5] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-center"
    :"animate-fade-out-semi w-[300%] h-[300%]  bg-[url('../autumn.svg')] opacity-[1%] rotate-45 scale-[1.5] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-center invert"


    const pStyling =
        theme ==="light"
    ?"text-lg text-neutral-700 font-cmu"
    :"text-lg text-neutral-200 font-cmu"

    const iconStyling=
        theme ==="light"
    ?"text-5xl sm:text-8xl text-neutral-600"
    :"text-5xl sm:text-8xl text-neutral-400"

    const badgeContainer=
        theme ==="light"
    ?"shadow-sm shadow-neutral-200 w-full h-full  border border-neutral-200 flex items-center justify-center"
    :"shadow-sm shadow-neutral-800 w-full h-full  border border-neutral-600 flex items-center justify-center"



    return(

        <div className="absolute inset-0 overflow-hidden">
        <div className={bgStyling}>


        </div>


        <Pan boxStyling="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4" innerStyling=" grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 w-full h-full items-center align-middle place-items-center">
        <div className={badgeContainer}>
        {
            textMode
            ?<p className={pStyling}> Teams</p>
            :<ai.AiOutlineTeam className={iconStyling}/>
        }
        </div>

        <div className={badgeContainer}>
        {
            textMode
            ?<p className={pStyling}>Players</p>
            :<ai.AiOutlineUser className={iconStyling}/>
        }
        </div>
        <div className={badgeContainer}>

        {
            textMode
            ?<p className={pStyling}>Competitions</p>
            :<ai.AiOutlineTrophy className={iconStyling}/>
        }

        </div>

        <div className={badgeContainer}>

        {
            textMode
            ?<p className={pStyling}>Attacking</p>
            :<gi.GiSoccerKick className={iconStyling}/>
        }
        </div>

        <div className={badgeContainer}>

        {
            textMode
            ?<p className={pStyling}>Defending</p>
            :<lu.LuShield className={iconStyling}/>
        }
        </div>

        <div className={badgeContainer}>

        {
            textMode
            ?<p className={pStyling}>Ball Controll</p>
            :<tb.TbPlayFootball className={iconStyling}/>
        }
        </div>
        </Pan>







</div>

    )

}

export default Hero
