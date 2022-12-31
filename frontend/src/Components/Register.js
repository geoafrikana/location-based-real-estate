import React from 'react'
import { 
    TextField,
styled,
Grid,
Typography,
Button} from '@mui/material'



const StyledDiv = styled('div')({
width: '50%',
marginLeft: 'auto',
marginRight: 'auto',
marginTop: '3rem',
border: '5px solid black',
padding: '3rem'
})

const StyledGrid = styled(Grid)({
    marginTop: '1rem'
    })
const StyledSpan = styled('span')({
    cursor: 'pointer',
    color: 'green'
    })

const SignupBtn = styled(Button)({
        backgroundColor:'green',
        color:'white',
        fontSize:'1.1rem',
        marginLeft: '1rem',
        '&:hover':{
          backgroundColor: 'blue'
        }
      })

function Register() {
  return (
    <StyledDiv>
<form>

    <Grid item justifyContent={'center'} container>
<Typography variant="h4" >CREATE AN ACCOUNT</Typography>
    </Grid>
    <StyledGrid item container>
<TextField id="username" label="Username" variant="outlined" fullWidth />
    </StyledGrid>

    <StyledGrid item container>
<TextField id="email" label="Email" variant="outlined" fullWidth />
    </StyledGrid>

    <StyledGrid item container>
<TextField type='password' id="password" label="Password" variant="outlined" fullWidth />
    </StyledGrid>

    <StyledGrid item container>
<TextField type='password' id="password2" label="Confirm password" variant="outlined" fullWidth />

    </StyledGrid>
    <StyledGrid  xs={8} sx={{
    marginTop:"1rem", marginLeft: 'auto', marginRight: 'auto'
        } } item container>
<SignupBtn
     variant='content' fullWidth type='submit'>SIGN UP</SignupBtn>

    </StyledGrid>
    
    </form> 
    <StyledGrid item justifyContent={'center'} container>
<Typography variant="small" >Already have an account? <StyledSpan>SIGN IN</StyledSpan></Typography>
    </StyledGrid>
    </StyledDiv>       
  )
}

export default Register