import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Box, Button, Stack} from '@mui/material'
export const Home = () => {
    const navigate = useNavigate();
    return (
      <Stack spacing={4}>
        Home Page
        <Stack direction={'row'} spacing={2}>
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
           
           <Button onClick={() => navigate("order-summery",
          { replace: true })} style={{
            backgroundColor: "blue",
            color: "white",
            alignItems: "center",
            position: "bottom"
          }}>Add To Cart</Button>
          </Box>
          
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
          Home Page
        </Box>
          </Stack>
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
          Home Page
        </Box>
          </Stack>
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
          Home Page
        </Box>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={2}>
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
          Home Page
          </Box>
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
          Home Page
        </Box>
          </Stack>
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
          Home Page
        </Box>
          </Stack>
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
          Home Page
        </Box>
          </Stack>
          </Stack>
        <Button onClick={() => navigate("order-summery",
          { replace: true })} style={{
            backgroundColor: "blue",
            color: "white",
            alignItems: "center"
          }}>Place Order</Button>
        
     </Stack>
  )
}
