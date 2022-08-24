import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Box sx={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
        <Typography sx={{fontSize: '20px', fontWeight: '500', display: 'flex', flexDirection: 'row', AlignItems: 'center'}}><span style={{color: '#4694c7'}}>S</span><span style={{color: '#f6aa31'}}><WbSunnyIcon /></span><span style={{color: '#4694c7'}}>lar</span><span style={{color: '#f6aa31'}}>Taxi</span></Typography>
        <Typography variant='h3' component='p' sx={{fontSize: '20px', fontWeight: '700'}}>Dashboard</Typography>
      </Box>
      <Box>
        <Button>
          <Typography sx={{textTransform: 'capitalize'}}>Notices</Typography>
          <ArrowDropDownIcon />
        </Button>
        <Button>
          <Typography sx={{textTransform: 'capitalize'}}>Publications</Typography>
          <ArrowDropDownIcon />
        </Button>
        <Button>
          <Typography sx={{textTransform: 'capitalize'}}>Account</Typography>
          <ArrowDropDownIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default Header