import {ThemeContext} from "../context/ThemeContext"
import React from "react";
import * as fa from "react-icons/fa"

const Nav = () => {

    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const navStyling =
        theme === "light"
        ?"justify-end relative w-full h-12 flex items-center bg-neutral-300 p-4 drop-shadow-md "
        :"justify-end relative w-full h-12 flex items-center bg-neutral-700 p-4 drop-shadow-md "

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
    ?"public/soccer_logo_black.png"
    :"public/soccer_logo_white.png"

    const pStyling =
        theme ==="light"
    ?"font-mono text-md text-neutral-700"
    :"font-mono text-md text-neutral-200"
    const iconStyling =
        theme ==="light"
    ?"text-md text-neutral-700"
    :"text-md text-neutral-200"




    return(


        <nav className={navStyling}>

        <div className="absolute left-3 h-8 w-14 flex items-center justify-center">
            <div className={navItem}>
                <img src={logoSrc} />
            </div>
        </div>

        <div className="h-8 flex items-center justify-center align-middle">
            <div className={navItem}>
        <p className={pStyling}>
                Scout
</p>
            </div>

            <div className={navItem}>

        <p className={pStyling}>
                Rankings
</p>

            </div>

            <div className={navItem}>

        <p className={pStyling}>
            Stats
</p>

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
