import { Stack,Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export const NewProducts = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={4}>
      <Stack direction={'row'}>
      <Box
          sx={{
            backgroundColor: 'green',
            height: '250px',
            width: '300px',
            color: 'white',
            '&:hover': {
              backgroundColor:'red'
            }
        }}
        >
          new product
        </Box>
        <Stack>
      <Box
          sx={{
            backgroundColor: 'green',
            height: '250px',
            width: '300px',
            color: 'white',
            '&:hover': {
              backgroundColor:'red'
            }
        }}
        >
        new product
        </Box>
      </Stack>
        <Stack>
      <Box
          sx={{
            backgroundColor: 'green',
            height: '250px',
            width: '300px',
            color: 'white',
            '&:hover': {
              backgroundColor:'red'
            }
        }}
        >
         new product
          </Box>
          
      </Stack>
        <Stack>
      <Box
          sx={{
            backgroundColor: 'green',
            height: '250px',
            width: '300px',
            color: 'white',
            '&:hover': {
              backgroundColor:'red'
            }
        }}
        >
       new product
        </Box>
        </Stack>
        
      </Stack>
      <Stack>
      <Box
          sx={{
            backgroundColor: 'green',
            height: '250px',
            width: '300px',
            color: 'white',
            '&:hover': {
              backgroundColor:'red'
            }
        }}
        >
        new product
        </Box>
      </Stack>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </Stack>
  )
}

