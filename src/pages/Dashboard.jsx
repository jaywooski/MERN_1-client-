// import jwt from 'jsonwebtoken'
// import { useEffect } from 'react';

import React from 'react'
import { useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS, GET_USER } from '../queries/userQueries'

function Dashboard() {

    const navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_USER)
    // function here to fetch data from api




    /* ^^^^^^^^^^^^^^^^^^ */

    if(loading) return <p>Loading...</p>
    if(error) return <p>Uh oh! Something happened that's not supposed to...</p>

  return (
    <div>
        { !loading && !error && (
          <h1>Dashboard</h1>
          
        )}
    </div>

  )
}

export default Dashboard