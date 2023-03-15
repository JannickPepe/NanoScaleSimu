import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';



export default function SimpleBottomNavigation() {

    // sæt state til at være default, dvs ingen active icon, sæt 0 for blogs active ect
    const [value, setValue] = React.useState();

    return (
        <Box sx={{  }}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
                <BottomNavigationAction label="Blogs" icon={<BookIcon />} />
                <BottomNavigationAction label="Projekter" icon={<AssignmentIcon />} />
                <BottomNavigationAction label="Hvem er vi" icon={<InfoIcon />} />
            </BottomNavigation>
        </Box>
    );
}