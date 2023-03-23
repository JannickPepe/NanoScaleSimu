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
        <div className=''>
            <Box sx={{}}>
                <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                    <BottomNavigationAction className=' rounded'label="Blogs" icon={<BookIcon />} style={{backgroundColor:'#3C9FE1', color:'white'}}/>
                    <BottomNavigationAction className=' rounded mx-2' label="Projekter" icon={<AssignmentIcon />} style={{backgroundColor:'#3C9FE1', color:'white'}} />
                    <BottomNavigationAction className=' rounded' label="Hvem er vi" icon={<InfoIcon />} style={{backgroundColor:'#3C9FE1', color:'white'}}/>
                </BottomNavigation>
            </Box>
        </div>
    );
}