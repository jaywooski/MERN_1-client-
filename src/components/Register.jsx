import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Register () {
    
    // Initialize useState hooks for setting variables here at top level
    // name state declarations
    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus ] = useState(false);

    // email state declarations
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus ] = useState(false);

    // password state declarations
    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setValidFocus ] = useState(false);

    // error and success message states
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      userRef.current.focus();
    }, [])

    // useEffect on validation of user's name anytime the field changes
    useEffect(() => {
      const result = NAME_RV.test(name)
    
      setValidName(result)
    }, [name])
    
    // useEffect on validation of password anytime password field changes
    useEffect(() => {
        const result = PASSWORD_RV.test(name)
      
        setValidPassword(result)
    }, [name])

    // useEffect on error message to clear when fields are changed
    useEffect(() => {
      setErrMsg('')
    
    }, [name, email, password])
    

    
    

    // Place focus on input fields by user and place error-style focus
    // on fields if error detected.
    const userRef = useRef();
    const errorRef = useRef();

    const navigate = useNavigate();

    // Regex validation for user input, username and password respectively
    const NAME_RV = /^[a-zA-Z ]{3,40}$/;
    const PASSWORD_RV = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    // Set connectivity test from frontend-to back end. First test of communication
    async function registerUser(event) {

        // Using onsubmit() function on a form automatically refreshes page. We do not want that
        event.preventDefault();

        try {
            
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
            
            // if(!data) {
                // console.log();
            // }
            // console.log('Success! Created');

            console.log(data);
            // setTimeout(() => {
            //     navigate('/login')
                
            // }, 4000);
            

        } catch (error) {
            console.log(error);
        }

    }


    
    return (

        <>
            <p ref={errorRef} aria-live="assertive" /*Not exactly sure what this means... will look into it */>{errMsg}</p>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input 
                    type="text"
                    autoComplete='off'  
                    value={name}
                    placeholder='Name'
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby='uidnote'
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)} 
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <input 
                    type="email" 
                    autoComplete='off'
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Your Email'
                />
                <br />
                <input 
                    type="password"
                    autoComplete='off'
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