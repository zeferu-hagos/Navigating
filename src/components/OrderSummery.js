import { Box, Stack } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
export const OrderSummery = () => {
    const navigate = useNavigate();
    return (
      <Stack spacing={4}>
    <Stack direction={'row'} spacing={2}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
          <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
          </Stack>
          <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
          </Stack>
          <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
          </Stack>
          <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
    </Stack> <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
          </Stack>
          <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
    </Stack>
        </Stack>
        <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
        </Stack>
        <Stack direction={'row'}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              height: '100px',
              width: '100px',
              padding: '16px',
              '&:hover': {
                backgroundColor:'primary.light'
              }
            }}
          >
            CodeEvolution
          </Box>
    </Stack>
            <button onClick={() => navigate(-1)}>Go Back</button>
    </Stack>
  )
}
