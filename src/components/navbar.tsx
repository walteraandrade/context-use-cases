import React from "react"
import { Link } from "react-router-dom"

import { useUserContext } from "../context/user.context"

const Navbar: React.FC = () => {
  const { logOut } = useUserContext()

  return (
    <nav className="w-full h-16 m-auto border-2 shadow-md px-8 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Link to="/home">Home</Link>
        <Link to="/albums">Albums</Link>
      </div>
      <button className="justify-self-end" onClick={logOut}>
        Logout
      </button>
    </nav>
  )
}

export default Navbar
