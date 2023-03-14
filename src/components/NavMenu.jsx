import { Paper, BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { Home, Menu, TaskAlt, Person, Login, Logout, PersonAddAlt  } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useState } from 'react'




const Navigation = () => {

  
  // Define state for active tab
  const [value, setValue] = useState('home')

  const token = Cookies.get("accessToken");


  return (
    <nav>
    <Paper className="desktop mobile" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      {
        token ? 
          <BottomNavigation
              showLabels={true}
              value={value}
              onChange={(_event, newValue) => {
              setValue(newValue);
              }}
          >
            <BottomNavigationAction label="Home" value="home" icon={<Home />} />
            <BottomNavigationAction label="Tasks" value="tasks" icon={<TaskAlt />} />
            <BottomNavigationAction label="User" value="user" icon={<Person />} />

          </BottomNavigation>
          :

          <BottomNavigation
            showLabels={true}
            value={value}
            onChange={(_event, newValue) => {
            setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Register" value="register" icon={<PersonAddAlt />} />
            <BottomNavigationAction label="Login" value="login" icon={<Login />} />
          </BottomNavigation>
          }
    </Paper>


    </nav>
  )
}

export default Navigation
