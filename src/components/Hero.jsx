import React from "react";
import {ThemeContext} from "../context/ThemeContext"
import {TextContext} from "../context/TextContext"
import {useViewport} from "../context/ViewportContext"
import Pan from "./Pan"
import * as ai from "react-icons/ai"
import * as gi from "react-icons/gi"
import * as lu from "react-icons/lu"
import * as tb from "react-icons/tb"

const Hero = () =>{


    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const {textMode,toggleTextMode} = React.useContext(TextContext)
    const viewportSize =  useViewport()


    const pStyling =
        theme ==="light"
    ?"text-lg text-neutral-700 font-cmu_n"
    :"text-lg text-neutral-200 font-cmu_n"

    const kWordStyling=
        theme ==="light"
    ?"text-lg text-neutral-700 font-cmu_it"
    :"text-lg text-neutral-200 font-cmu_it"

    const linkStyling =
        theme ==="light"
    ?"text-lg text-neutral-700 font-cmu_it hover:underline underline-offset-4 decoration-neutral-900"
    :"text-lg text-neutral-200 font-cmu_it hover:underline underline-offset-4 decoration-neutral-100"

    const hrStyling=
        theme ==="light"
    ?"border-neutral-700"
    :"border-neutral-300"

    const iconStyling=
        theme ==="light"
    ?"text-5xl sm:text-6xl md:text-8xl text-neutral-600"
    :"text-5xl sm:text-6xl md:text-8xl text-neutral-400"


    const badgeContainer=
        theme ==="light"
    ?"duration-[400ms]  active:shadow-inner active:shadow-neutral-400 shadow-neutral-300 shadow-md hover:z-50 p-8 w-full h-full rounded-sm border border-neutral-200 flex items-center justify-center bg-neutral-300 text-center"
    :"duration-[400ms]  active:shadow-inner active:shadow-neutral-600 shadow-neutral-800 shadow-md hover:z-50 p-8 w-full h-full rounded-sm border border-neutral-600 flex items-center justify-center bg-neutral-900 text-center"



    if (viewportSize !== "sm" && viewportSize !== "md"){

    return(

        <div className="absolute inset-0 overflow-x-hidden overflow-y-auto">

        <div className="w-full h-full">


        <div className ="absolute top-[40%] left-1/4 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/2">
                <p className={pStyling}>Welcome to
            <span className={kWordStyling + " ml-2"}>SoccerScouter</span>
    </p>

            <hr className={hrStyling}/>
            <br/>

            <p className={pStyling}>
                    Here you&apos;ll be able to scout players,
                    explore our

            <span className={linkStyling + " mx-2"}>
            rankings
            </span>
            for teams & players. Use our
            <span className={linkStyling + " mx-2"}>
            similarity based recommender system
            </span>
            to find players & teams that share resemblance &
            check out a diverse set of statistics.
            Logged in users will be able to use our
            <span className={linkStyling + " mx-2"}>
            order of merit approach
            </span>
            for their scouting needs.
            </p>



        </div>


        <Pan boxStyling="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3" innerStyling=" grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 items-center align-middle place-items-center w-full h-full">
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







</div>

    )

    }
    return(



        <div>




        <Pan boxStyling="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4" innerStyling=" grid grid-cols-2 grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 items-center align-middle place-items-center w-full h-full">
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
