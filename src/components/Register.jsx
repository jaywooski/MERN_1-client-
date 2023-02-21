import React, { useState } from 'react'

function Register () {
    
    // Initialize useState hooks for setting variables here at top level
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // Set connectivity test from frontend-to back end. First test of communication
    async function registerUser(event) {

        //  onsubmit() automatically refreshes page using a form. We do not want that
        event.preventDefault();

        const response = await fetch('http://localhost:5000/api/register', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
        })

        const data = await response.json()

        console.log(data);

    }


    
    return (

        <>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input 
                    value={name}
                    type="text"  
                    placeholder='Name' 
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
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
                    value="Register" />
            </form>
        </>
    )
}

export default Register