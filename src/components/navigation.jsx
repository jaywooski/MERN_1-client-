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
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            </BottomNavigation>
        </Paper>
    
    </>
  )
}

export default navigation
