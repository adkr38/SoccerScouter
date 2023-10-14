import React from "react";
import {ThemeContext} from "../context/ThemeContext"
import {useViewport} from "../context/ViewportContext"
import User from "./User"
import * as pi from "react-icons/pi"
import * as bs from "react-icons/bs"
const ForumPost = (props) => {

}

const ForumPicker = (props) =>{
    const {theme} = props
    const viewport = useViewport()
    const pStyling = theme ==="light"
    ?"text-md font-mono_r text-neutral-600 font-cmu_n"
    :"text-md font-mono_r text-neutral-200 font-cmu_n"

    const h1Styling = theme ==="light"
    ?"text-center text-4xl sm:text-5xl  font-mono_r text-neutral-600 font-times_n"
    :"text-center text-4xl sm:text-5xl font-mono_r text-neutral-200 font-times_n"

    const iconStyling = theme ==="light"
    ?"text-center text-[4rem] sm:text-[6rem] text-neutral-600 font-times_n"
    :"text-center text-[4rem] sm:text-[6rem] text-neutral-200 font-times_n"



    return(
    <div className="pt-20 pb-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-row gap-14 sm:gap-0 sm:flex-col items-center align-middle justify-center">
        <h1 className={h1Styling + (viewport === "sm"?" hidden":" visible")}>
        Chose your world
        </h1>

        <div className="grid grid-flow-row sm:grid-flow-col gap-0 sm:gap-10 sm:border-b border-b-neutral-200 place-items-center items-center justify-center align-middle w-fit h-full sm:h-60">
            <div className="group w-16 h-22 sm:w-24 sm:h-32 relative flex flex-col gap-4 items-center justify-center">
                <svg className="w-full h-full group-hover:animate-bounce-up animate-bounce-up" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-neutral-300 animate-rise-up delay-200 group-hover:animate-rise-up" x="10" y="70" rx="3" ry="3" width="10" height="30"></rect>
                    <rect className="fill-neutral-400 animate-rise-up delay-400 group-hover:animate-rise-up" x="30" y="50" rx="3" ry="3" width="10" height="50"></rect>
                    <rect className="fill-neutral-500 animate-rise-up delay-600 group-hover:animate-rise-up" x="50" y="30" rx="3" ry="3" width="10" height="70"></rect>
                    <rect className="fill-neutral-600 animate-rise-up delay-800 group-hover:animate-rise-up" x="70" y="10" rx="3" ry="3" width="10" height="90"></rect>
                </svg>
                <p className= {pStyling}>Analytics</p>

            </div>

            <div className="w-24 h-32 relative flex flex-col gap-4 items-center justify-center">
                <bs.BsEyeglasses className={iconStyling + " animate-blurUp group-hover:animate-blurUp"}/>
                <p className={pStyling}>Scouting</p>
            </div>

            <div className="group w-24 h-32 relative flex flex-col gap-4 items-center justify-center">
                <pi.PiSoccerBallThin className={iconStyling + " animate-soccerBall group/sball-hover:animate-soccerBall"}/>
                <p className={pStyling}>Forecasting</p>
            </div>



        </div>
    </div>
    )

}

const Forum = () => {
    const {theme} = React.useContext(ThemeContext)

    return(
        <div>
        <ForumPicker theme = {theme}/>
</div>
    )


}

export default Forum;
