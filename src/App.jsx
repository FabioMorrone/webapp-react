import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"


import FilmContext from "./contexts/PostContext"
import Home from "./pages/Home"
import SingoloFilm from "./pages/SingoloFilm"
import DefoultLayout from "./layout/DefoultLayout"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefoultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/SingoloFilm/:id" Component={SingoloFilm} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
