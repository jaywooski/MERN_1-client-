import React, { useState } from 'react'
import { useQuery, useMutation } from "@apollo/client";
import { LOGIN_USER } from '../mutations/user_mutations';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false); //login status as state?

    const navigate = useNavigate()


    const [ login, { loading, error }]  = useMutation(LOGIN_USER, {
        onError: (error) => console.log("Error:", error),
        onCompleted: (data) => {
            console.log("Logged in: ", data)
            navigate("/dashboard");
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ variables: { email, password }})
    }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Your Email'
            autoComplete='off'
        />
        <br />
        <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            autoComplete='off'
          />
        <br />
        <input 
            type="submit" 
            value="Login"
            onSubmit={handleSubmit}
            />
    </form>
</>
  )
}

export default Login