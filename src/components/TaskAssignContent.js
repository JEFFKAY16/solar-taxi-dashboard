import React from 'react'
import { Box, TableContainer, Table, TableHead, TableRow, TableBody, Paper } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(project, assign, dueDate, tasks, status) {
  return { project, assign, dueDate, tasks, status };
}

const rows = [
  createData('Build Dashboard', 'James Mwinga', '11/21/2022', 'Use react to build the dashboard', 'In progress'),
  createData('Build Assign Tasks', 'Natasha Ivy', '08/01/2021', 'Use react to build the dashboard', 'Done'),
  createData('Build Everything', 'Marko Liza', '05/31/2023', 'Use react to build the dashboard', 'In progress'),
  createData('Build More Tasks', 'Monica Doe', '01/31/2023', 'Use react to build the dashboard', 'Not Started'),
];

const TaskAssignContent = () => {
  return (
    <Box sx={{margin: '20px 0'}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Projects</StyledTableCell>
              <StyledTableCell align="center">Assign To</StyledTableCell>
              <StyledTableCell align="center">DueDate</StyledTableCell>
              <StyledTableCell align="center">Tasks</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.project}>
                <StyledTableCell component="th" scope="row">
                  {row.project}
                </StyledTableCell>
                <StyledTableCell align="center"><span style={{backgroundColor: '#e9eef9', padding: '5px', borderRadius: '10px'}}>{row.assign}</span></StyledTableCell>
                <StyledTableCell align="center">{row.dueDate}</StyledTableCell>
                <StyledTableCell align="center"><span style={{backgroundColor: '#e9eef9', padding: '5px', borderRadius: '10px'}}>{row.tasks}</span></StyledTableCell>
                { row.status == 'In progress' ?
                  <StyledTableCell align="center"><span style={{backgroundColor: '#fbd56e', padding: '5px', borderRadius: '10px'}}>{row.status}</span></StyledTableCell>
                  : row.status == 'Done' ?
                  <StyledTableCell align="center"><span style={{backgroundColor: '#62cb36', padding: '5px', borderRadius: '10px'}}>{row.status}</span></StyledTableCell>
                  :
                  <StyledTableCell align="center"><span style={{backgroundColor: '#ccc', padding: '5px', borderRadius: '10px'}}>{row.status}</span></StyledTableCell>
                }
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TaskAssignContent