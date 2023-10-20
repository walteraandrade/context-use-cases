import { Routes, Route } from "react-router"
import { UserContextProvider } from "./context/user.context"
import Guard from "./guard"
import Login from "./modules/login"
import Home from "./modules/home"
import Albums from "./modules/albums"
import Navbar from "./components/navbar"
import Cart from "./modules/albums/components/cart"
import { CounterContextProvider } from "./context/counter.context"

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <div className="flex">
        <CounterContextProvider>
          <Cart />
          <div className="container m-auto">
            <Routes>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/albums"
                element={
                  <Guard>
                    <Albums />
                  </Guard>
                }
              />

              <Route
                path="/home"
                element={
                  <Guard>
                    <Home />
                  </Guard>
                }
              />
            </Routes>
          </div>
        </CounterContextProvider>
      </div>
    </UserContextProvider>
  )
}

export default App
