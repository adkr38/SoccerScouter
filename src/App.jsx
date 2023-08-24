import Nav from "./components/Nav"
import Hero from "./components/Hero"
import React from "react"
import { ThemeContext } from "./context/ThemeContext"


function App() {

    const {theme,toggleTheme} = React.useContext(ThemeContext)
    const consoleStyling =
        theme === "light"
        ?"w-screen h-screen bg-zinc-100"
        :"w-screen h-screen bg-zinc-700"

  return (
      <div className={consoleStyling} >
      <Nav/>
      <Hero/>
      </div>
  )
}

export default App
