import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack'

const SponsoredTrades = ({userName}) => {

  var props = [{
    itemName: "Party Rental",
    itemImage: "https://bouncycastlenetwork-res.cloudinary.com/image/upload/f_auto,q_auto,c_limit,w_900/b574cc9396228ad996f8dce7143012d2",
    availableDate: "12/2",
    username: userName.displayName,
    avatar: 'https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg',
    views: Math.random() * (1300 - 700) + 700
  },{
    itemName: "Lawn Mower",
    itemImage: "https://foursite-pape-production.s3.amazonaws.com/agriculture.papemachinery.com/5e3de596-8ac7-42bc-b232-45c7baea857e.jpg",
    availableDate: "10/12",
    username: userName.displayName,
    avatar: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
    views: Math.random() * (1300 - 700) + 700
  },{
    itemName: "Iphone x",
    itemImage: "https://img.merkandi.com/imgcache/resized/images/offer/2020/11/19//iphone-x-grado-ab-silver-4-1605789001-1605789007.jpg",
    availableDate: "Now",
    username: userName.displayName,
    avatar: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
    views: Math.random() * (1300 - 700) + 700
  },{
    itemName: "Jordan 4 Cements",
    itemImage: "https://thumbor.offerup.com/YdxmNoJXTh5vqDX9hKpbsH_JL5w=/720x960/21d7/21d74a12d79840ff855139b7b5a55dde.jpg",
    availableDate: "Now",
    username: userName.displayName,
    avatar: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
    views: Math.random() * (1300 - 700) + 700
  },{
    itemName: "Gaming PC",
    itemImage: "https://thumbor.offerup.com/YnFYVlYTIExyNeg8ta2u-q-WH7s=/1442x1922/9a51/9a51372be937486d80ffb7e693abdb43.jpg",
    availableDate: "12/8",
    username: userName.displayName,
    avatar: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
    views: Math.random() * (1300 - 700) + 700
  },{
    itemName: "Patio Furniture",
    itemImage: "https://thumbor.offerup.com/0x-Nr-l3t6Z_nxs6oREvG2iFRb8=/1290x954/76bd/76bd770a38c24c36a1fb40b1a87e5382.jpg",
    availableDate: "Now",
    username: userName.displayName,
    avatar: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
    views: Math.random() * (1300 - 700) + 700
  }
]

  return (
    <>
    {props.map((item, i) => {
      return (
        <Card sx={{ width: 350, mb: 2.5, ml: 1, mt: 1 }} key={i}>
        <CardMedia
          component="img"
          height="140"
          image = {item.itemImage}
          alt="green iguana"
        />
        <CardContent>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.itemName}
          </Typography>
          <div style={{}}>
          <TrendingUpIcon fontSize='large' color="primary"/>
          </div>
          </div>
          <Typography variant="body2" color="text.secondary">
            This {item.itemName} will be available {item.availableDate}
          </Typography>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="body2" color="text.secondary" sx={{pt: '5px'}}>
            {item.username}
          </Typography>
          <div className='viewsContainer' style={{display: 'flex'}}>
          <VisibilityIcon color="primary"/>
            <div style={{marginTop: 3, marginLeft: 2}}>{Math.floor(item.views)}</div>
          </div>
          </div>
        </CardContent>
        <CardActions>
          <Button sx={{mr: 3}} size="small" onClick={(e) => {
            // Get info about item and user to send to db to query
            console.log(item.itemName, item.username)
          }}>Message</Button>
          <Button size="small" onClick={(e) => {
            // Get info about item to send to db to query
            console.log(item.itemName)
          }}>Learn More</Button>
          <Container className="avatar" sx={{width: '0 !important'}} onClick={(e) => {
            //info about user
            console.log(item.username)
          }}>
          <Avatar alt="Remy Sharp" src={item.avatar} />
          </Container>
        </CardActions>
      </Card>

      )
    })}

    </>
  );
};

export default SponsoredTrades;

