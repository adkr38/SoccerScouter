import Nav from "./components/Nav"
import Hero from "./components/Hero"
import React from "react"
import { ThemeContext } from "./context/ThemeContext"


function App() {

    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const consoleStyling =
        theme === "light"
        ?"w-screen h-screen "
        :"w-screen h-screen bg-zinc-700"

    const patternStyling=
        theme ==="light"
    ?"absolute overflow-hidden inset-0 animate-fade-out-semi w-[300%] h-[300%] bg-[url('../autumn.svg')] opacity-[2%] rotate-45 scale-[1.5] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-center"
    :"absolute overflow-hidden inset-0 animate-fade-out-semi w-[300%] h-[300%] bg-[url('../autumn.svg')] opacity-[2%] rotate-45 scale-[1.5] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-center invert"

    const bgStyling =
        theme ==="light"
    ?"absolute inset-0 overflow-hidden bg-neutral-100"
    :"absolute inset-0 overflow-hidden bg-neutral-700"



  return (

      <div >
        <div className={bgStyling}>
          <div className={patternStyling} />
        </div>
      <Nav/>
      <Hero/>
      </div>
  )
}

export default App
