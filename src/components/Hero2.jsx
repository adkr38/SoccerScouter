import React from "react"
import {ThemeContext} from "../context/ThemeContext"
import * as fi from "react-icons/fi"

const Hero = () =>{
    const {theme} = React.useContext(ThemeContext)
    const logoSrc =
        theme ==="light"
            ?"soccer_logo_white.png"
            :"soccer_logo_zinc.png"

    const pStyling =
        theme ==="light"
    ?"font-times_n font-black text-6xl text-transparent bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text"
    :"font-times_n font-black text-6xl text-transparent bg-gradient-to-br from-stone-500 to-stone-400 bg-clip-text"

    const pStylingFormal =
        theme ==="light"
    ?"font-cmu_it text-black text-xl"
    :"font-cmu_it text-stone-200 text-xl"


    const logoStyling ="flex items-center justify-center align-middle w-28 h-28 rounded-3xl p-3 bg-neutral-800 relative"

    const logoImgStyling =
        theme ==="light"
    ?"absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 col-start-1 col-end-1"
    :"absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 col-start-1 col-end-1"

    const buttonStyling =
        theme ==="light"
    ?"inline-flex items-center align-middle justify-center gap-2 font-mont_n text-sm text-base text-neutral-700 border-zinc-400 border rounded-lg px-4 py-2 shadow-sm shadow-neutral-400 sm:px-2  active:shadow-inner active:shadow-neutral-400 cursor-pointer"
    :"inline-flex items-center align-middle justify-center gap-2 font-mont_n text-sm text-base text-stone-200 border-zinc-700 border rounded-lg px-4 py-2  shadow-sm shadow-neutral-900 sm:px-2  active:shadow-inner active:shadow-neutral-900 cursor-pointer"

    const fancyButtonStyling =
        theme ==="light"
    ?"important-button rounded-lg p-[0.13rem] outline-none group active:shadow-neutral-600 active:shadow-inner cursor-pointer"
    :"important-button-dark rounded-lg p-[0.13rem] outline-none group active:shadow-neutral-900 active:shadow-inner cursor-pointer"

    const buttonSpan =
        theme ==="light"
    ?"font-mont_n text-sm inline-flex h-full w-fit items-center gap-1 rounded-lg bg-neutral-100 px-3 py-1.5 text-neutral-700 transition-all duration-300 group-hover:bg-neutral-300 "
    :"font-mont_n text-sm inline-flex h-full w-fit items-center gap-1 rounded-lg bg-neutral-800 px-4 py-1.5 text-neutral-200 transition-all duration-300 group-hover:bg-neutral-600"

    const iconStyling=
        theme ==="light"
    ?"text-lg text-neutral-600"
    :"text-lg text-stone-200"


    const shadowFade =
        theme ==="light"
    ?"shadow-neutral-100 absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]  "
    :"shadow-neutral-800 absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]  "

    const movingLeaves =
        theme ==="light"
    ?"moving-leaves absolute h-[200%] w-full  opacity-[5%]"
    :"moving-leaves invert absolute h-[200%] w-full opacity-[3%]"



    return(

        <div className="relative overflow-hidden w-full h-screen grid items-center grid-flow-col place-items-center justify-center align-middle grid-cols-1 lg:grid-cols-3">
        <div className="z-10 w-full h-[60%] grid place-items-center justify-center align-middle grid-rows-3 col-start-1 col-end-2 lg:col-end-3" >
            <div className="flex items-center align-middle justify-center gap-4 row-start-1 row-end-1  ">
                <div className={logoStyling}>
                    <img src={logoSrc} className={logoImgStyling}/>
                </div>

                <div className="row-start-1 row-end-3 text-center">
                        <p className={pStyling}>
                        Soccer
                        </p>

                        <p className={pStyling}>
                        Scouter
                        </p>
                </div>
                </div>


        <div className="row-start-2 row-end-2 max-w-[55ch] px-8 leading-8 text-center">

                <p className={pStylingFormal}>
                            Use analytics for scouting, track players &
                            interact with other scouters
                </p>
            </div>

        <div className="grid grid-rows-2 grid-cols-2 sm:grid-rows-1 items-center justify-center align-middle gap-6 col-start-1 col-end-3 lg:col-end-2 row-start-3 row-end-4 max-w-[55ch] text-center place-items-center">


            <a className={buttonStyling}>

                <p >
                Twitter
                </p>

        <fi.FiTwitter className={iconStyling}/>

            </a>


            <a className={buttonStyling}>

                <p >
                Forum
                </p>

        <fi.FiBookOpen className={iconStyling}/>

            </a>

            <a className={buttonStyling}>

                <p >
                    Articles
                </p>

        <fi.FiFileText className={iconStyling}/>

            </a>

            <a className={fancyButtonStyling + " col-start-1 col-end-4"}>
                <span className={buttonSpan }>
                    Join our mailing list
                    <fi.FiMail className={iconStyling}/>
                </span>

            </a>


        </div>



        </div>

        <div className="relative hidden w-full h-full lg:grid col-start-3 col-end-4 row-start-1 row-end-1">
            <div className="absolute -inset-60 top-1/2 -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full">
                <div className="relative w-full h-full">
                    <div className={movingLeaves} />
                    <div className={shadowFade}/>
                </div>
            </div>

                <div></div>
                <div></div>
        </div>

    </div>


    )

}

export default Hero
