import React from "react"
import { useUserContext } from "../context/user.context"
import { useNavigate } from "react-router"

interface Form {
  email: string
  password: string
}

const Form: React.FC = () => {
  const { logIn } = useUserContext()
  const navigate = useNavigate()

  const [formData, setFormData] = React.useState<Form>({
    email: "",
    password: "",
  })

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value })
  }

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    logIn(formData)

    navigate("/home")
  }

  return (
    <form
      className="flex flex-col px-8 py-12 w-[400px] items-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl ">Login</h3>
      <div className="mt-4" />
      <div className="flex flex-col">
        <label>Email</label>
        <input
          onChange={onChangeEmail}
          className="border-b-4 focus:outline-none"
        />
        <label>Senha</label>
        <input
          onChange={onChangePassword}
          type="password"
          className="border-b-4 focus:outline-none"
        />
        <button type="submit">Entrar</button>
      </div>
    </form>
  )
}

export default Form
