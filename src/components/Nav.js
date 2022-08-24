import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTop: '2px solid #000', borderBottom: '2px solid #000'}}>
      <Button>
          <Typography sx={{textTransform: 'capitalize'}}>Office Locations</Typography>
          <ArrowDropDownIcon />
        </Button>
        <Button>
          <Typography sx={{textTransform: 'capitalize'}}>Departments</Typography>
          <ArrowDropDownIcon />
        </Button>
        <Typography sx={{fontWeight: '400', color: '#4694c7', cursor: 'pointer'}}>Staff Profiles</Typography>
        <Link to="/assign_tasks"><Typography sx={{fontWeight: '400', color: '#4694c7', cursor: 'pointer'}}>Assign Tasks</Typography></Link>
        <Typography sx={{fontWeight: '400', color: '#4694c7', cursor: 'pointer'}}>Tasks(4)</Typography>
        <Typography sx={{fontWeight: '400', color: '#4694c7', cursor: 'pointer'}}>Task Update</Typography>
    </Box>
  )
}

export default Nav