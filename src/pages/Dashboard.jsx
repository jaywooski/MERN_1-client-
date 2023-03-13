import React from 'react'
// import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Dashboard() {

    const navigate = useNavigate();

    // function here to fetch data from api




    /* ^^^^^^^^^^^^^^^^^^ */



    // useEffect(() => {
    //   const token = localStorage.getItem('token')
    //   if(token) {
    //     const user = jwt.decode(token);
    //     if(!user) {
    //         localStorage.removeItem('token');
    //         // window.location.href = '/'
    //         navigate('/login')

    //     } else {
    //         // function here to do something else like fetching data
    //         return
    //     }
    //   }
    
    // }, [])
    

  return (
    <div>
        <h1>Dashboard</h1>
        <h3>You made it in!</h3>
        <h3>Great job!</h3>

    </div>

  )
}

export default Dashboard