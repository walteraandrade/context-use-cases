import React from "react"
import { useUserContext } from "../context/user.context"
import { Navigate, useLocation } from "react-router-dom"

const Guard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useUserContext()
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default Guard
