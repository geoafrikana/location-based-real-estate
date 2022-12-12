import { Grid,styled, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material'
import React, {useState} from 'react'
import { MapContainer, TileLayer,
         Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

import homeIconPng from '../Assets/Mapicons/house.png'
import apartmentIconPng from '../Assets/Mapicons/apartment.png'
import officeIconPng from '../Assets/Mapicons/office.png'
import img1 from '../Assets/img1.jpg';
import myListings from '../Assets/Data/Dummydata';

function Listings() {
  const StyledCard = styled(Card)({
margin: '0.5rem',
border:'1px solid black',
position: 'relative'
  })


  const StyledCardMedia = styled(CardMedia)({
    paddingRight: '1rem',
    paddingLeft: '1rem',
    height: '20rem',
    width: '30rem'
    
      })

      const StyledPriceTypography = styled(Typography)({
        position: 'absolute',
        backgroundColor: 'green',
        zIndex: '1000',
        color: 'white',
        top: '100px',
        left:'20px',
        padding:'5px'
      })

      const houseIcon = new Icon({
        iconUrl: homeIconPng,
        iconSize: [40,40],
      })

  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40,40],
  })

  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPng,
    iconSize: [40,40],
  })

  
  return (
    
    <Grid container>
<Grid item xs={4} >
{myListings.map(listing=>{
  return(
    <StyledCard key={listing.id}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={listing.title}
      />
      <StyledCardMedia
        component="img"
    
        image={listing.picture1}
        alt={listing.title}
      />
      <CardContent>
        <Typography variant="body2">
        {listing.description.substring(0,150)}...
        </Typography>
      </CardContent>
      {listing.property_status === 'Sale' ? (<StyledPriceTypography>{listing.listing_type}: ${listing.price.toLocaleString()}</StyledPriceTypography>) :(<StyledPriceTypography>{listing.listing_type}: ${listing.price.toLocaleString()}/{listing.rental_frequency}</StyledPriceTypography>) }
      
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions> */}
      
    </StyledCard>
  )
})}
</Grid>
<Grid item xs={8} sx={{marginTop:'0.5rem'}}>
  <AppBar position='sticky'>
<div style={{height:'100vh'}}>
      <MapContainer center={[51.49463731028351, -0.11398489688921488]} 
      zoom={10} scrollWheelZoom={true}>
  <TileLayer
   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {myListings.map((listing)=>{
    const iconDisplay =()=>{
      if(listing.listing_type === 'House'){
        return houseIcon
      }
      else if(listing.listing_type === 'Apartment'){
        return apartmentIcon
      }
      else if(listing.listing_type === 'Office'){
        return officeIcon
      }
    }
    return(<Marker 
      key= {listing.id}
      icon={iconDisplay()}
      position={[listing.location.coordinates[0], listing.location.coordinates[1]]}>
      
      <Popup>
      <Typography variant='h5'>{listing.title}</Typography>
      <img src={listing.picture1}  style={{height:'14rem', width:'18rem'}} />
      <Typography variant='body1'>{listing.description.substring(0,150)}...</Typography>
      <Button fullWidth variant='contained'>Details</Button>
    </Popup> 
      </Marker>)
  })}
</MapContainer>
    </div></AppBar>
</Grid>
    </Grid>
 
  )
}

export default Listings