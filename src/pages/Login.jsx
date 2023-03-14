import React, { useState } from 'react'
import { useQuery, useMutation } from "@apollo/client";
import Cookies from 'js-cookie';
import { LOGIN_USER } from '../mutations/user_mutations';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, Box } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';
// import { set } from 'mongoose';

const Login = ({onLogin, loggedIn}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loggedIn, setLoggedIn] = useState(false); //login status as state?

    const navigate = useNavigate()


    const [ login, { loading, error }]  = useMutation(LOGIN_USER, {
        onError: (error) => console.log("Error:", error),
        onCompleted: (data) => {
            console.log("Logged in: ", data)
            // navigate("/dashboard");
            Cookies.set("accessToken", data.login.accessToken) /* Sets accessToken to a cookie named accessToken */
            // This accessToken has been hashed using bcrypt from the server side
        }
    })
    
    const handleLogin = (e) => {
        e.preventDefault()
        
        onLogin(true)
        // loggedIn ? navigate('/dashboard') : null
        login({ variables: { email, password }})
        
    }

    return (

        <>
            <Box 
                sx={{ 
                    height: "100%", 
                    display: 'flex',
                    width: "100%",
                }}
            >

                <Paper 
                    elevation={21}
                    sx={{ 
                            display: 'flex', 
                            maxWidth: 350, 
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: 'auto',
                            justifyContent: 'space-around',
                            height: 200,
                            padding: 4
                            
                        }}
                    >
                    <Typography
                        sx={{}}
                        variant='h5'
                        fontFamily={'monospace'}
                        >
                        Login   
                    </Typography>
                    <form onSubmit={handleLogin}>
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
                            onSubmit={handleLogin}
                            />
                    </form>

                </Paper>
            </Box>
        </> 
    )
}

export default Login