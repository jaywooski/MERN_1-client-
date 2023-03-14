import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavMenu from './components/NavMenu';
import Header from './components/Header';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';
// import { useState } from "react";


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),

})

function App() {
  
  const accessToken = Cookies.get("accessToken");

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setLoggedIn(loggedIn);
  }
  
  // const [token, setToken] = useState(false);

  useEffect(() => {
    
    Cookies.remove("accessToken")
    console.log(loggedIn)
    
  }, [loggedIn])
  

  return (
    <>
    <ApolloProvider client={client}>
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path='/login' element={<Login onLogin={handleLogin}  isLoggedIn={loggedIn} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />


        </Routes>
        
        <NavMenu />
      </BrowserRouter>
    </ApolloProvider>
    </>
  )
  
}

export default App;
