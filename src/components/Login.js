import React, { useState } from 'react'
import { useAuth } from './auth';
import { useLocation, useNavigate } from 'react-router-dom';

import { Stack} from '@mui/material';
export const Login = () => {
  const [user, setUser] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || "/";
    const handleLogin = () => {
      auth.login(user);
      
        navigate(redirectPath, {replace: true});
    }
  return (
    
    <Stack direction={'row'}>
      
      <Stack>
      <input type='text' label="First Name" variant='contained'  onChange={(e)=>setUser(e.target.value)}/>
      
        <button onClick={handleLogin}>Login</button>
      </Stack>
      
    </Stack>
  )
}

          