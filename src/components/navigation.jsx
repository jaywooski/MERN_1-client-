import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";

import React from 'react'

const navigation = () => {
  return (
    <>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Tasks" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="User" icon={<ArchiveIcon />} />
            </BottomNavigation>
        </Paper>
    
    </>
  )
}

export default navigation
