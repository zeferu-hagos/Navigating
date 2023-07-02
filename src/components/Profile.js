import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/");
    }
  return (
    <Stack textAlign="center">
      
      <Box
        sx={{
          backgroundColor: 'blue',
          height: '1000px',
          width: '100%',
          color: 'white',
          '&:hover': {
            backgroundColor: 'black',
            cursor: 'pointer'
          }
        }}
      >
        
          Welcome {auth.user}
         
      </Box>
          <button onClick={handleLogout}>logout</button>
    </Stack>
  )
}
