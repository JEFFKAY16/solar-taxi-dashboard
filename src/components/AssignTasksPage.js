import { Box } from '@mui/material'
import React from 'react'
import HeaderAssign from './HeaderAssign'
import TaskAssignContent from './TaskAssignContent'
import TaskAssignFooter from './TaskAssignFooter'

const AssignTasksPage = () => {
  return (
    <Box>
      <Box sx={{borderBottom: '2px solid #000'}}>
        <HeaderAssign />
      </Box>
      <Box>
        <TaskAssignContent />
        <TaskAssignFooter />
      </Box>
    </Box>
  )
}

export default AssignTasksPage