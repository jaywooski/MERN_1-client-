import React from 'react'
import { Box, AppBar, Toolbar, Link, Typography } from "@mui/material";
import Cookies from 'js-cookie';

const Header = () => {

    const token = Cookies.get("accessToken");
    
  return (
    <Box className='' sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#030929'}}>
        <Toolbar>
          <Typography
            variant='h2'
            fontFamily={'Climate Crisis'}
            sx={{ color:'white', flexGrow: 2, fontFamily: 'Climate Crisis'}}
            // src={customLogo}  
          >
            To Do App
          </Typography>

            {/* Navigation Links here using custom styled Box */}
            <Box sx={{ display:'flex', flexGrow: 1, justifyContent: 'space-around' }}>
              { token ?
                  <>
                    <Link to='#' >Home</Link>
                    <Link to='#'>About</Link>
                    <Link to='#'>Projects</Link>
                  </>

                :

                <>
                    <Link to='login'>Login</Link>
                    <Link to='register'>Register</Link>
                </>

              }
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
      
    
  )



}

export default Header