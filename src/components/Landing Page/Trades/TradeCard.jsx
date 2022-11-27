import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import BasicModal from '../Modal/ListingModal'

export default function MediaCard(props) {
  const { listings } = props
  return (
    <>
    {listings.map((item, i) => {
      return (
        <Card sx={{ width: 260 }} key={i}>
        <CardMedia
          component="img"
          height="140"
          image = {item.photos[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description.split('.')[0] + ' ...'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${item.type[0].toUpperCase() + item.type.substr(1)} trade located at ${item.zip_code}`}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{pt: '5px'}}>
            {`Posted by: ${item.owner_id}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={(e) => {
            // Get info about item and user to send to db to query
            console.log(item.name, item.owner_id)
          }}>Message</Button>
          <BasicModal images={item.photos} description={item.description} id={item.listing_id}/>
          <Container className="avatar" sx={{width: '0 !important'}} onClick={(e) => {
            //info about user
            console.log(item.owner_id)
          }}>
          <Avatar alt="Remy Sharp" src={item.avatar} />
          </Container>
        </CardActions>
      </Card>

      )
    })}

    </>
  )
}