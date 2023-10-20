import { Routes, Route } from "react-router"
import { UserContextProvider } from "./context/user.context"
import Guard from "./guard"
import Login from "./modules/login"
import Home from "./modules/home"
import Albums from "./modules/albums"
import { Link } from "react-router-dom"

function App() {
  return (
    <UserContextProvider>
      <nav className="w-full h-16 m-auto border-2 shadow-md px-8 flex items-center gap-4">
        <Link to="/home">Home</Link>
        <Link to="/albums">Albums</Link>
        <button>Logout</button>
      </nav>
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
    </UserContextProvider>
  )
}

export default App
