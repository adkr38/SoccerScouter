import React from "react"
import {ThemeContext} from "../context/ThemeContext"
import * as fi from "react-icons/fi"
import * as ri from "react-icons/ri"
import {SoccerFeature,SoccerPossition} from "../enums/CardEnums"
import {Link} from "react-router-dom"

const Card = (props) =>{
    const {title, enums,theme,positioning} = props

    const titleStyling =
        theme==="light"
    ?"font-times_n text-lg text-neutral-900"
    :"font-times_n text-lg text-neutral-200"

    const minorShadowHover=
        theme ==="light"
    ?"shadow-[0.4rem_0.4rem_0.2rem_-0.1rem_rgba(10,10,10,0.2)]"
    :"shadow-[0.4rem_0.4rem_0.2rem_-0.1rem_rgba(200,200,200,1)]"

    const cardBackground =
        theme ==="light"
    ?`absolute group flex flex-col w-[20rem] gap-4 rounded-2xl border border-neutral-300 bg-neutral-100 p-7 drop-shadow-[1rem_1rem_3rem_rgba(20,20,20,0.1)] duration-300 hover:-skew-x-3 hover:scale-105 hover:shadow-[2.5rem_2.5rem_4rem_-1rem_#0004,inset_1rem_1rem_4rem_-1rem_#fff1]`
    :`absolute group flex flex-col w-[20rem] gap-4 rounded-2xl border border-neutral-700 bg-neutral-900 p-7 drop-shadow-[1rem_1rem_3rem_rgba(20,20,20,0.3)] duration-300 hover:-skew-x-3 hover:scale-105  hover:shadow-[2.5rem_2.5rem_4rem_-1rem_#0004,inset_1rem_1rem_4rem_-1rem_#fff1]`


    const pColorVariants =
        {
            "light": " duration-300 group-hover:shadow-[0.4rem_0.4rem_0.2rem_-0.1rem_rgba(10,10,10,0.2)] group-hover:-translate-y-2" ,
            "dark": " duration-300 group-hover:shadow-[0.4rem_0.4rem_0.2rem_-0.1rem_rgba(100,100,100,0.5)] group-hover:-translate-y-2" ,
        }

    const fakeTextColorVariants = {
            "light": "duration-300 bg-gray-200 rounded-2xl h-[10rem] p-4 flex gap-4 flex-col  group-hover:-translate-y-3 group-hover:shadow-[0.4rem_0.4rem_0.2rem_-0.1rem_rgba(10,10,10,0.2)]" ,
            "dark": "duration-300 bg-gray-200 rounded-2xl h-[10rem] p-4 flex gap-4 flex-col  group-hover:-translate-y-3 group-hover:shadow-[0.4rem_0.4rem_0.2rem_-0.1rem_rgba(100,100,100,1)]" ,
    }


    return(
        <div className={`group ${positioning}`}>
            <div className={cardBackground}>
                <p className={titleStyling}>
                    {title}
                </p>

            <div className="flex gap-3">
                <p className={enums[0].styling + pColorVariants[theme] }>{enums[0].name}</p>
                <p className={enums[1].styling + pColorVariants[theme] }>{enums[1].name}</p>

            </div>
            <div className= {fakeTextColorVariants[theme]}>
                <div className="w-full h-[1rem] bg-neutral-900 rounded-full"/>
                <div className="w-3/4 h-[0.5rem] bg-neutral-50 rounded-full"/>
                <div className="w-1/2 h-[0.5rem] bg-neutral-300 rounded-full"/>
                <div className="w-3/4 h-[0.5rem] bg-neutral-500 rounded-full"/>
                <div className="w-1/3 h-[0.5rem] bg-neutral-50 rounded-full"/>
            </div>

            </div>

        </div>



    )

}

const Hero = () =>{
    const {theme} = React.useContext(ThemeContext)
    const logoSrc =
        theme ==="light"
            ?"soccer_logo_white.png"
            :"soccer_logo_white.png"

    const pStyling =
        theme ==="light"
    ?"font-times_n font-black text-4xl sm:text-6xl text-transparent bg-gradient-to-br from-neutral-900 to-neutral-600 bg-clip-text"
    :"font-times_n font-black text-4xl sm:text-6xl text-transparent bg-gradient-to-br from-neutral-400 to-neutral-500 bg-clip-text"

    const pStylingFormal =
        theme ==="light"
    ?"font-cmu_it text-black text-md sm:text-xl"
    :"font-cmu_it text-stone-200 text-md sm:text-xl"


    const logoStyling =
        theme === "light"
            ?"flex items-center justify-center align-middle w-20 h-20 sm:w-28 sm:h-28 rounded-3xl p-3 bg-neutral-800 relative"
            :"flex items-center justify-center align-middle w-20 h-20 sm:w-28 sm:h-28 rounded-3xl p-3 bg-neutral-900 relative"

    const logoImgStyling =
        theme ==="light"
    ?"absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 col-start-1 col-end-1"
    :"absolute top-[53%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 col-start-1 col-end-1"

    const buttonStyling =
        theme ==="light"
    ?"inline-flex items-center align-middle justify-center gap-2 font-mont_n text-xs sm:text-sm text-base text-neutral-700 border-zinc-400 border rounded-lg px-2 py-2 shadow-sm shadow-neutral-400 sm:px-4 active:shadow-inner active:shadow-neutral-400 cursor-pointer hover:bg-neutral-200"
    :"inline-flex items-center align-middle justify-center gap-2 font-mont_n text-xs sm:text-sm text-base text-stone-200 border-zinc-700 border rounded-lg px-2 py-2  shadow-sm shadow-neutral-900 sm:px-4  active:shadow-inner active:shadow-neutral-800 cursor-pointer hover:bg-neutral-900"

    const fancyButtonStyling =
        theme ==="light"
    ?"important-button rounded-xl p-[0.15rem] outline-none group active:shadow-neutral-600 active:shadow-inner cursor-pointer"
    :"important-button-dark rounded-xl p-[0.15rem] outline-none group active:shadow-neutral-900 active:shadow-inner cursor-pointer"

    const buttonSpan =
        theme ==="light"
    ?"font-mont_n text-xs sm:text-sm inline-flex h-full w-fit items-center gap-1 rounded-lg bg-neutral-100 px-3 py-1.5 text-neutral-700 transition-all duration-300 group-hover:bg-neutral-300 group-active:shadow-inner group-active:shadow-neutral-200"
    :"font-mont_n text-xs sm:text-sm inline-flex h-full w-fit items-center gap-1 rounded-lg bg-neutral-800 px-4 py-1.5 text-neutral-200 transition-all duration-300 group-hover:bg-neutral-900 group-active:shadow-inner group-active:shadow-neutral-800"

    const iconStyling=
        theme ==="light"
    ?"text-md sm:text-lg text-neutral-600"
    :"text-md sm:text-lg text-stone-200"


    const shadowFade =
        theme ==="light"
    ?"shadow-neutral-100 absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]  "
    :"shadow-neutral-800 absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]  "

    const movingLeaves =
        theme ==="light"
    ?"moving-leaves absolute h-[200%] w-full  opacity-[5%]"
    :"moving-leaves invert absolute h-[200%] w-full opacity-[3%]"



    return(

        <div className="pt-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-full h-screen grid items-center grid-flow-col place-items-center justify-center align-middle grid-cols-1 lg:grid-cols-3">
        <div className="z-10 w-[22rem] h-[22rem] sm:w-full grid place-items-center justify-center align-middle grid-rows-3 col-start-1 col-end-2 lg:col-end-3" >
            <div className="flex items-center align-middle justify-center gap-4 row-start-1 row-end-1  ">
                <div className={logoStyling}>
                    <img src="soccer_logo_white.png" className={logoImgStyling}/>
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


            <a className={buttonStyling} href="https://www.twitter.com/soccerscoutingapp" target="_blank">

                <p >
                    Twitter
                </p>

                <ri.RiTwitterXLine className={iconStyling}/>

            </a>


        <Link to ="/forum">
            <a className={buttonStyling}>

                <p >
                Forum
                </p>

        <fi.FiBookOpen className={iconStyling}/>

            </a>
</Link>
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

        <div className="relative hidden w-full h-full lg:grid col-start-3 col-end-4 row-start-1 row-end-2 items-center ">
            <div className="absolute -inset-60 top-1/2 -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full">
                <div className="relative w-full h-full">
                    <div className={movingLeaves} />
                    <div className={shadowFade}/>
                </div>
            </div>


        <Card positioning=" z-30 -translate-y-[0rem] -translate-x-[10rem]" title="Centerbacks with good ball control?" enums = {[SoccerPossition.DF,SoccerFeature.POSSESSION]} theme = {theme}/>
        <Card positioning = "z-10 -translate-y-[10rem] translate-x-[4rem]" title="Who's the most similar FW to Messi?" enums = {[SoccerPossition.FW,SoccerFeature.SIMILARITY]} theme = {theme}/>
        <Card positioning="z-50 -translate-y-[20rem] -translate-x-[5rem]" title="Looking for veteran mifdielder with exceptional passing" enums = {[SoccerPossition.MF,SoccerFeature.PASSING]} theme = {theme}/>
        </div>

    </div>


    )

}

export default Hero
