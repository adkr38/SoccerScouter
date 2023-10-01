import Nav from "./components/Nav"
import Forum from "./components/Forum"
import Hero from "./components/Hero"
import React from "react"
import { ThemeContext } from "./context/ThemeContext"
import {HashRouter , Route, Routes } from "react-router-dom"


function App() {

    const {theme} = React.useContext(ThemeContext)


    const wrapperStyling=
        theme ==="light"
    ?"min-h-[calc(100vh)] overflow-hidden -z-50 bg-neutral-100 "
    :"min-h-[calc(100vh)] overflow-hidden -z-50 bg-neutral-800 "


  return (
        <HashRouter>
            <div className={wrapperStyling}>
                <Nav />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/forum" element={<Forum />} />
                </Routes>
            </div>
        </HashRouter>

  )
}

export default App
