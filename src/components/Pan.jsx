import React from "react";
import {ThemeContext} from "../context/ThemeContext"
import {TextContext} from "../context/TextContext"
import * as fa from "react-icons/fa"
import * as bi from "react-icons/bi"

const Pan = ({children,boxStyling,innerStyling}) => {

    const {theme,toggleTheme}= React.useContext(ThemeContext)
    const {textMode, toggleTextMode} = React.useContext(TextContext)

    const panStyling =
        theme ==="light"
    ?`rounded-b-lg p-12 bg-neutral-300  shadow-inner shadow-neutral-300  ${innerStyling}`
    :`rounded-b-lg p-12 bg-neutral-900  shadow-inner shadow-neutral-800  ${innerStyling}`

    const upperBand=
        theme ==="light"
    ?" px-6 relative w-full h-10 bg-neutral-200 flex items-center align-middle gap-3 justify-end rounded-t-lg"
    :" px-6 relative w-full h-10 bg-neutral-800 flex items-center align-middle gap-3 justify-end rounded-t-lg"

    const iconStyling =
        theme ==="light"
    ?"text-md text-neutral-700"
    :"text-md text-neutral-200"



    return(
        <div className={boxStyling}>
            <div className={upperBand}>
        {
            textMode
            ?<bi.BiSmile className={iconStyling} onClick={toggleTextMode}/>
            :<bi.BiText className={iconStyling} onClick={toggleTextMode}/>
        }

            </div>

            <div className={panStyling}>

                {children}
                </div>

        </div>
    )

}


export default Pan;
