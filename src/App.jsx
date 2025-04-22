import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"


import FilmContext from "./contexts/PostContext"
import Home from "./pages/Home"
import SingoloFilm from "./pages/SingoloFilm"
import DefoultLayout from "./layout/DefoultLayout"
import FilmContext from "./contexts/FilmContext"


function App() {


  return (
    <FilmContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefoultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/SingoloFilm/:id" Component={SingoloFilm} />

          </Route>
        </Routes>
      </BrowserRouter>
    </FilmContext.Provider>
  )
}

export default App
