import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import { useState } from "react";


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),

})

function App() {
  
  return (
    <>
    <ApolloProvider client={client}>
      <BrowserRouter> 
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />


        </Routes>
      </BrowserRouter>
    </ApolloProvider>
    </>
  )
  
}

export default App;
