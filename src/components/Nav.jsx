import {ThemeContext} from "../context/ThemeContext"
import {useViewport} from "../context/ViewportContext"
import React from "react";
import * as fa from "react-icons/fa"
import * as ri from "react-icons/ri"
import * as bs from "react-icons/bs"
import * as pi from "react-icons/pi"


const Nav = () => {

    const viewportSize = useViewport()
    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const navStyling =
        theme === "light"
        ?"z-50 justify-end absolute left-0 top-1 w-full h-12 flex items-center  drop-shadow-md "
        :"z-50 justify-end absolute left-0 top-1 w-full h-12 flex items-center  drop-shadow-md "

    const navItem =
        theme === "light"
        ?"px-3 border-r-zinc-400 border-r "
        :"px-3 border-r-zinc-100 border-r "

    const navItem2 =
        theme === "light"
        ?"p-4 mt-1"
        :"p-4 mt-1"

    const logoSrc =
        theme ==="light"
    ?"soccer_logo_black.png"
    :"soccer_logo_white.png"

    const pStyling =
        theme ==="light"
    ?"font-mont_n text-xs sm:text-base text-neutral-700"
    :"font-mont_n text-xs sm:text-base text-neutral-200"

    const buttonStyling =
        theme ==="light"
    ?"font-mont_n text-xs sm:text-base text-neutral-700 border-zinc-400 border rounded-lg px-3 py-1 shadow-sm shadow-neutral-400 sm:px-2  active:shadow-inner active:shadow-neutral-400"
    :"font-mont_n text-xs sm:text-base text-neutral-200 border-zinc-700 border rounded-lg px-3 py-1 shadow-sm shadow-neutral-900 sm:px-2  active:shadow-inner active:shadow-neutral-900 "

    const iconStyling =
        theme ==="light"
    ?"text-md text-neutral-700"
    :"text-md text-neutral-200"




    return(


        <nav className={navStyling}>

        <div className="absolute left-1 sm:left-3 h-8 w-14 flex items-center justify-center">
            <div className={navItem}>
                <img src={logoSrc} />
            </div>
        </div>

        <div className="h-8 flex items-center justify-center align-middle">
            <div className={navItem}>
        {
            viewportSize==="sm"
            ?<ri.RiSpyLine className={iconStyling}> </ri.RiSpyLine>
            :<p className={pStyling}>Scout</p>

        }
            </div>

            <div className={navItem}>

        {
            viewportSize==="sm"
            ?<pi.PiShootingStarLight className={iconStyling}> </pi.PiShootingStarLight>
            :<p className={pStyling}>Rankings</p>

        }


            </div>

            <div className={navItem}>

        {
            viewportSize==="sm"
            ?<bs.BsClipboardData className={iconStyling}> </bs.BsClipboardData>
            :<p className={pStyling}>Stats</p>


        }


            </div>

            <div className={navItem}>

        <button className={buttonStyling}>
           Log In
</button>

            </div>


        <div className={navItem2}>
                <button onClick={toggleTheme}>
                    {
                        theme ==="light"
                        ?<fa.FaRegMoon className={iconStyling}></fa.FaRegMoon>
                        :<fa.FaRegSun className={iconStyling}></fa.FaRegSun>
                    }
                </button>

            </div>

</div>




        </nav>

    )

}

export default Nav
