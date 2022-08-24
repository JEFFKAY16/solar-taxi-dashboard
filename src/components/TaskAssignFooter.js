import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TaskAssignFooter = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button variant='contained' sx={{backgroundColor: '#dadafe', '&:hover': {backgroundColor: '#dadafe'}}}>
      <Link to="/"><Typography sx={{textTransform: 'capitalize', color: '#000'}}>Back To Dashboard</Typography></Link>
      </Button>
      <Button variant='contained' sx={{backgroundColor: '#9ee3fc', '&:hover': {backgroundColor: '#9ee3fc'}}}>
        <Typography sx={{textTransform: 'capitalize', color: '#000'}}>Save As Draft</Typography>
      </Button>
      <Button variant='contained' sx={{backgroundColor: '#8aebd6', '&:hover': {backgroundColor: '#8aebd6'}}}>
        <Typography sx={{textTransform: 'capitalize', color: '#000'}}>Send</Typography>
      </Button>
    </Box>
  )
}

export default TaskAssignFooter