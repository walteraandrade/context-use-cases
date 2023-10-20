import React from "react"
import { Card } from "../../components/card"
import Form from "../../components/form"

const Login: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="mt-40" />
      <Card>
        <Form />
      </Card>
    </div>
  )
}

export default Login
