import Dashboard from './components/Dashboard';
import AssignTasksPage from './components/AssignTasksPage';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Box sx={{padding: '20px'}}>
      <Routes>
        <Route exact path="/" element={< Dashboard/>} />
        <Route path="/assign_tasks" element={<AssignTasksPage />} />
      </Routes>
    </Box>
  );
}

export default App;
