import React from 'react'
import { styled, Typography, Grid, Button } from '@mui/material';
import city from '../Assets/city.jpg'

function Hero() {
    const StyledIMG =  styled('img')({
        width: '100%',
        height: '80vh'
    })

    const StyledDiv =  styled('div')({
        backgroundImage: `url(${city})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '88vh',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'

    })
    const HeroBtn = styled(Button)({
        backgroundColor:'green',
        color:'white',
        borderRadius: '15px',
        fontSize:'2rem',
        marginTop: '2rem',
        '&:hover':{
          backgroundColor: 'blue'
        },
        boxShadow: "3px 3px 3px white"
      })
    
      const StyledSpan = styled('span')({
        color:'green'
      })
  return (
<StyledDiv>
    <div sx={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Typography sx={{color:'white', textAlign:'center'}} variant='h4'>FIND YOUR <StyledSpan>NEXT PROPERTY</StyledSpan> ON THE LBREP WEBSITE</Typography>
        <Typography sx={{color:'white', textAlign:'center'}} variant='h4'><HeroBtn>SEE ALL PROPERTIES</HeroBtn></Typography>
        
    </div>
</StyledDiv>

  )
}

export default Hero