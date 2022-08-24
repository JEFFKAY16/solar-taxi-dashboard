import React from 'react'
import { Box, Card } from '@mui/material';

const MainContent = () => {
  return (
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '20px 0'}}>
      <Box sx={{width: '33.3%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <Card sx={{backgroundColor: '#002060', color: '#fff', padding: '20px', width: '90%', margin: 'auto', height: '200px'}}>Revenues</Card>
        <Card sx={{backgroundColor: '#002060', color: '#fff', padding: '20px', width: '90%', margin: 'auto', height: '200px'}}>Task Progress</Card>
      </Box>
      <Box sx={{width: '33.3%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <Card sx={{backgroundColor: '#002060', color: '#fff', padding: '20px', width: '90%', margin: 'auto', height: '200px'}}>Operational Time</Card>
        <Card sx={{backgroundColor: '#002060', color: '#fff', padding: '20px', width: '90%', margin: 'auto', height: '200px'}}>Operations & Human Capital</Card>
      </Box>
      <Box sx={{width: '33.3%', padding: '20px'}}>
        <Card sx={{backgroundColor: '#002060', color: '#fff', padding: '20px', width: '90%', margin: 'auto', height: '440px'}}>Data Graphs</Card>
      </Box>
    </Box>
  )
}

export default MainContent