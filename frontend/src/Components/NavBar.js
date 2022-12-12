import React from 'react'
import { AppBar, Typography,Button,Toolbar, styled
        } from '@mui/material'; 
import {Link, useNavigate} from 'react-router-dom';


function NavBar() {
  const LeftNav = styled('div')({
    marginRight: "auto"
  })

  const RightNav = styled('div')({
    marginLeft: "auto",
    marginRight: '5rem'
  })

  const AddPropertyBtn = styled(Button)({
    backgroundColor:'green',
    color:'white',
    width:'15rem',
    fontSize:'1.1rem',
    marginRight: '1rem',
    '&:hover':{
      backgroundColor: 'blue'
    }
  })

  const LoginBtn = styled(Button)({
    backgroundColor:'white',
    color:'black',
    width:'15rem',
    fontSize:'1.1rem',
    marginLeft: '1rem',
    '&:hover':{
      backgroundColor: 'green'
    }
  })

  const navigate = useNavigate()
  return (
    <>
  <AppBar sx={{backgroundColor:'black'}} position="static">
    <Toolbar>
      <LeftNav>
      <Button onClick={()=>navigate('/')} color="inherit"><Typography variant="h4">LBREP</Typography></Button>
      </LeftNav>
      <div>
      <Button 
      onClick={()=>navigate('/listings')} 
      color="inherit" sx={{marginRight: '2rem'}}>
        <Typography variant="h6">Listings</Typography></Button>
      <Button color="inherit" sx={{
       marginLeft: '2rem'        
        }}><Typography variant="h6">Agencies</Typography></Button>
      </div>
      <RightNav>
      <AddPropertyBtn > Add Property</AddPropertyBtn>
      <LoginBtn onClick={()=>navigate('/login')}>Login</LoginBtn>
      </RightNav>
        
        
       
    </Toolbar>
  </AppBar>
    </>

  )
}

export default NavBar