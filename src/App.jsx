import Nav from "./components/Nav"
// import Hero from "./components/Hero"
import Hero from "./components/Hero2"
import React from "react"
import { ThemeContext } from "./context/ThemeContext"


function App() {

    const {theme} = React.useContext(ThemeContext)


    const wrapperStyling=
        theme ==="light"
    ?"min-h-[calc(100vh)] overflow-hidden -z-50 bg-neutral-100 "
    :"min-h-[calc(100vh)] overflow-hidden -z-50 bg-neutral-800 "


  return (


      <>
      <div className={wrapperStyling}>
          <Nav/>
          <Hero/>
          <Hero/>
      </div>
      </>

  )
}

export default App
