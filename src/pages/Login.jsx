import React, { useState } from 'react'
import { gql, useQuery, useMutation } from "@apollo/client";

const GQL_LOGIN = gql`
    mutation login{ 
        email
        password
        
    }
`;

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false); //login status as state?

    
    async function loginUser(event) {

        event.preventDefault();
        
        try {
            
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
    
            const data = await response.json()
            console.log(data);
            // console.log('success');

        } catch (error) {
            console.log(error)
        }

        // if(data) {
        //     // store web token to localstorage
        //     // localStorage.setItem('token', data.user)
        //     alert('Login Successful!')
        //     window.location.href = '/dashboard'

        // } else {
        //     alert('Please check username and password!')
        // }

        
    }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={loginUser}>
        <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Your Email'
        />
        <br />
        <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        <br />
        <input 
            type="submit" 
            value="Login" />
    </form>
</>
  )
}

export default Login