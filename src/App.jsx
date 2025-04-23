import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefoultLayout from "./layout/DefoultLayout"
import Home from "./pages/Home"
import SingoloFilm from "./pages/SingoloFilm"
import GlobalContext from "./contexts/GlobalContext"



function App() {
  const [isLoading, setIsLoading] = useState(true)




  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefoultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/SingoloFilm/:id" Component={SingoloFilm} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
